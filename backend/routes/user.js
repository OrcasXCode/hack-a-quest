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
      },
      {
        title: "Anime",
        description: "200",
        correctAnswer: "example_flag",
      },
      {
        title: "Brain Damage",
        description: "200",
        correctAnswer: "example_flag",
      },
      {
        title: "Rodger",
        description: "500",
        correctAnswer: "example_flag",
      },
      {
        title: "Cyber Assault",
        description: "300",
        correctAnswer: "example_flag",
      },
      {
        title: "Code Breaker",
        description: "400",
        correctAnswer: "example_flag",
      },
      {
        title: "Network Intrusion",
        description: "600",
        correctAnswer: "example_flag",
      },
      {
        title: "Encryption Challenge",
        description: "700",
        correctAnswer: "example_flag",
      },
      {
        title: "Web Security Challenge",
        description: "800",
        correctAnswer: "example_flag",
      },
      {
        title: "Rev Engineering Challenge",
        description: "900",
        correctAnswer: "example_flag",
      },
      {
        title: "Forensics Challenge",
        description: "1000",
        correctAnswer: "example_flag",
      },
    ];

    for (const data of challengeData) {
      const existingChallenge = await Challenge.findOne({ title: data.title });

      if (existingChallenge) {
        await Challenge.findOneAndUpdate(
          { title: data.title },
          { description: data.description }
        );
      } else {
        await Challenge.create(data);
      }
    }

    const filteredChallenges = await Challenge.find({}, "title description");

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

module.exports = router;
