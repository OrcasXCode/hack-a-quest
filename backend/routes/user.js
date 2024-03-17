const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { Team } = require("../db/user");
const Challenge = require("../db/flag");
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
    const challenges = await Challenge.create(
      {
        title: "Mirage",
        description: "Hello this is a demo ctf",
        correctAnswer: "example_flag",
      },
      {
        title: "Anime",
        description: "Hello this is a demo ctf",
        correctAnswer: "example_flag",
      },
      {
        title: "Brain Damage",
        description: "Hello this is a demo ctf",
        correctAnswer: "example_flag",
      },
      {
        title: "Rodger",
        description: "Hello this is a demo ctf",
        correctAnswer: "example_flag",
      }
    );

    const filterdChallenges = await Challenge.find({}, "title description");
    if (!challenges) {
      return res.status(400).json({
        success: false,
        msg: "There are no ctf",
      });
    }
    return res.status(200).json({
      challenges: filterdChallenges,
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
