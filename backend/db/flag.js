const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    correctAnswer: String,
    solved: Boolean,
  },
  {
    timestamps: true,
  }
);

const Challenge = mongoose.model("Challenge", ChallengeSchema);
module.exports = Challenge;
