const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { Team } = require("../db/user");
const Challenge = require("../db/flag");
const { Scoreboard } = require("../db/scoreboard");
const jwtSecret = process.env.JWT_SECRET || "omsureja";
require("dotenv").config();

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const teamId = req.body.teamId;
    let user = await Team.findOne({
      teamLeaderEmail: email,
      teamId: teamId,
    });
    if (!user) {
      user = await Team.findOne({
        "members.email": email,
        teamId: teamId,
      });
    }
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }
    const tkn = jwt.sign({ xcvtkn: user._id.toString() }, jwtSecret, {
      expiresIn: "24h",
    });
    return res.json({
      success: true,
      msg: "Login!",
      token: tkn,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

router.get("/challenges", async (req, res) => {
  try {
    const challengeData = [
      {
        title: "Mirage",
        description: "100",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Anime",
        description: "200",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Brain Damage",
        description: "200",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Rodger",
        description: "500",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Cyber Assault",
        description: "300",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Code Breaker",
        description: "400",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Network Intrusion",
        description: "600",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Encryption Challenge",
        description: "700",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Web Security Challenge",
        description: "800",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Rev Engineering Challenge",
        description: "900",
        correctAnswer: "example_flag",
        solved: false,
      },
      {
        title: "Forensics Challenge",
        description: "1000",
        correctAnswer: "example_flag",
        solved: false,
      },
    ];

    for (const data of challengeData) {
      const existingChallenge = await Challenge.findOne({ title: data.title });

      if (existingChallenge) {
        await Challenge.findOneAndUpdate(
          { title: data.title },
          { description: data.description, solved: data.solved }
        );
      } else {
        await Challenge.create(data);
      }
    }

    const challenges = await Challenge.find({});

    await Team.updateMany({}, { $set: { challenges: challenges } });

    const filteredChallenges = await Challenge.find(
      {},
      "title description solved"
    );

    return res.status(200).json({
      challenges: filteredChallenges,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

router.get("/getleaderboard", async (req, res) => {
  try {
    const teams = await Team.find({}, "teamName points");

    const updatePromises = teams.map(async (team) => {
      await Scoreboard.findOneAndUpdate(
        { teamName: team.teamName },
        { points: team.points },
        { upsert: true }
      );
    });

    await Promise.all(updatePromises);

    return res.status(200).json({
      success: true,
      msg: "Leaderboard updated successfully",
      teams: teams.map((team) => ({
        teamName: team.teamName,
        points: team.points,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

router.post("/validflag", async (req, res) => {
  try {
    const { teamId, title, flag } = req.body;

    if (!teamId) {
      return res.status(401).json({
        success: false,
        msg: "Team ID not found",
      });
    }

    const team = await Team.findOne({ teamId: teamId });

    if (!team) {
      return res.status(404).json({
        success: false,
        msg: "Team not found",
      });
    }

    const challenge = await Challenge.findOne({ title: title });

    if (!challenge) {
      return res.status(404).json({
        success: false,
        msg: "Challenge not found",
      });
    }

    if (challenge.correctAnswer !== flag) {
      return res.status(400).json({
        success: false,
        msg: "Incorrect flag",
      });
    }

    // Update team's points
    team.points = parseInt(team.points) + parseInt(challenge.description);

    // Find the challenge within the team's challenges array and update its solved status
    const index = team.challenges.findIndex((c) => c.title === title);
    if (index !== -1) {
      team.challenges[index].solved = true;
    }

    // Save the updated team object
    await team.save();

    return res.status(200).json({
      success: true,
      msg: "Flag verified, team points updated, and challenge marked as solved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

router.get("/isdone", async (req, res) => {
  try {
    const { teamId, title } = req.body;
    if (!teamId) {
      return res.status(400).json({
        success: false,
        msg: "Team Id not found",
      });
    }
    const team = await Team.findOne({ teamId: teamId });
    if (!team) {
      return res.status(401).json({
        success: false,
        msg: "Invalid Team ID",
      });
    }

    const challenge = team.challenges.find((c) => c.title == title);
    if (!challenge) {
      return res.status(403).json({
        success: false,
        msg: "Challenge not found",
      });
    }
    return res.status(200).json({
      success: true,
      isSolved: challenge.solved || false, // Return the solved status, defaulting to false if not found
      msg: "Challenge status fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

module.exports = router;
