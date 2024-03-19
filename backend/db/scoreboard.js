const mongoose = require("mongoose");

const ScoreboardSchema = new mongoose.Schema(
  {
    teamName: String,
    points: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Scoreboard = mongoose.model("Scoreboard", ScoreboardSchema);
module.exports = {
  Scoreboard,
};
