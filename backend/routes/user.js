const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { Team } = require("../db/user");
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

module.exports = router;
