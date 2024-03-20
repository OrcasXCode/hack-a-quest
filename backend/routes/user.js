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
        title: "Acroquest",
        description:
          "Meet Shikhar and Sumanth, the intrepid globetrotter duo, their **puzzle-solving skills** knows no bounds. Denmark was their first stop, followed by Ukraine, then Belize, Albania, and finally, Italy. Each destination a tale of adventure, culture, and discovery, Shikhar and Sumanth embraced them all with their love for **abbreviation puzzles**, making their journey even more unforgettable.",
        correctAnswer: "c7fgeN_OOPS_you_g07_M3",
        points: "100",
        solved: false,
      },
      {
        title: "Conundrum",
        description:
          "An encrypted parcel emerges, shielded by advanced cryptographic techniques, luring digital adventurers. With no insight into its encryption method, they embark on unraveling its secrets. Will you decipher its mystery or succumb to the challenge? Embark on the journey into cryptography and unravel the enigma. ",
        correctAnswer: "c7F9en_7hIS_iS_Th3_F149_-O_FLA9.Txt",
        points: "100",
        solved: false,
      },
      {
        title: "Spare_Parts",
        description:
          "Delve into Spare_Parts, a cryptographic challenge. Decrypt enigmatic messages to unlock secrets. Will you crack the code or remain puzzled? Engage in the cryptic journey now. ",
        correctAnswer: "example_flag",
        points: "300",
        solved: false,
      },
      {
        title: "GuddyBuddy",
        description:
          "Untangle intricate puzzles to reveal concealed messages. Can you navigate this cryptic journey and uncover its secrets, or will you be left puzzled? ",
        correctAnswer: "inctf{0n3_h4lf_1s_n0t_3n0ugh}",
        points: "150",
        solved: false,
      },
      {
        title: "Volatile Vault ",
        description:
          "Can you crack the code to access the volatile vault? This crypto challenge will test your decryption skills. Be quick, the vault's security measures are constantly shifting! ",
        correctAnswer: "example_flag",
        points: "300",
        solved: false,
      },
      {
        title: "Get heist ",
        description:
          "Operation: Ghost. Infiltrate ACME's vault. Bypass defenses, steal data. Become a ghost, not a glitch. Think you're in? ",
        correctAnswer: "c7f93n_Y0U_607_Me",
        points: "150",
        solved: false,
      },
      {
        title: "Answer_me ",
        description:
          "Infiltrate ACME's data fortress like a phantom. Weave through firewalls, crack passwords. Download the flag before dawn. One wrong step and you're a digital ghost ",
        correctAnswer: "Questions & Answers.txt ",
        points: "50",
        solved: false,
      },
      {
        title: "Sound-Pollution ",
        description:
          "The airwaves are buzzing with more than just noise.  A secret message, encoded within the static, awaits those with sharp ears and a knack for deciphering hidden signals.  Can you crack the code and make the hidden flag sing loud and clear? ",
        correctAnswer: "smile_and_wav_boys",
        points: "100",
        solved: false,
      },
      {
        title: "TCP ",
        description:
          "Think you're a master network observer? In this challenge, you'll need to leverage your packet sniffing skills to capture the handshake and extract the hidden flag during this digital exchange. Can you exploit this network protocol to claim your prize? ",
        correctAnswer: "34_5137_5_6_7",
        points: "200",
        solved: false,
      },
      {
        title: "Electric eel ",
        description:
          "In this electrifying challenge, become the Electric Eel, silently slithering through the data stream.  Your task: Sniff out valuable packets and extract the hidden flag before it gets encrypted.  But be careful, getting caught could send a jolt through your entire operation! ",
        correctAnswer: "pkT_c4ptur3D",
        points: "200",
        solved: false,
      },
      {
        title: "find_me_if_you_can",
        description:
          "The flag is out there, hidden within the ocean of network traffic. In this electrifying challenge, you'll become a digital detective, wielding your packet sniffing skills like a cyber-harpoon. Can you follow the trail and prove you're the ultimate network sleuth? ",
        correctAnswer: "telnet_is_dangerous",
        points: "150",
        solved: false,
      },
      {
        title: "look_into_something ",
        description:
          "Delve into a distorted reflection of reality to find the flag. ",
        correctAnswer: "8.8.8.8_google_192.168.1.254",
        points: "250",
        solved: false,
      },
      {
        title: "100",
        description:
          "Can you crack the code and unlock the secrets of Project 100? ",
        correctAnswer: "58b4d49e5489be09fc409e4c0b5e66ad",
        points: "150",
        solved: false,
      },
      {
        title: "stop-drop-and-roll ",
        description:
          "This ain't your typical CTF. Expect the unexpected!  Think outside the box to conquer this unique challenge. ",
        correctAnswer: "HTB{1_wiLl_sT0p_dR0p_4nD_r0Ll_mY_w4Y_oUt!}",
        points: "200",
        solved: false,
      },
      {
        title: "unbreakable",
        description:
          "Forget what you think you know about CTFs.  This challenge defies logic and demands an unorthodox approach.  Sharpen your creative thinking and prepare to be surprised.  Can you crack the code that lies beyond logic and claim victory? ",
        correctAnswer: "HTB{3v4l_0r_3vuln??}",
        points: "250",
        solved: false,
      },
      {
        title: "Game of thrones ",
        description:
          "Game of Thrones: Inspired by the legendary saga, this team embodies strategic mastery and cunning tactics, ready to conquer the challenges of the cybersecurity realm just like the characters of Westeros. ",
        correctAnswer: "CTF{odin was here} ",
        points: "100",
        solved: false,
      },
      {
        title: "Illumanti ",
        description:
          "A shadowy force wielding unparalleled expertise in cybersecurity challenges, this team operates with precision and strategic mastery, just like the enigmatic organization they are named after.  ",
        correctAnswer: "CTF{mortylikessnakejazz} ",
        points: "100",
        solved: false,
      },
      {
        title: "solver ",
        description:
          "A name synonymous with unraveling complexity in the cybersecurity realm. Armed with intellect and finesse, they dissect challenges with precision, emerging victorious from every cryptic encounter. ",
        correctAnswer: "CTF{EasY-RS4} ",
        points: "150",
        solved: false,
      },
      {
        title: "Nice_pants ",
        description:
          "This team exudes confidence and style, just like their name suggests. With a dash of humor and a whole lot of skill, they tackle cybersecurity challenges with flair and finesse, leaving their mark on the competition while rocking those metaphorical nice pants. ",
        correctAnswer: "CTF{thankyouhacker}  ",
        points: "100",
        solved: false,
      },
      {
        title: "salad ",
        description:
          "A puzzling name for a team that thrives on complexity. Like a mix of unexpected ingredients, they approach cybersecurity challenges with a blend of diverse skills and tactics, leaving their opponents guessing at every turn. ",
        correctAnswer: "flag{s4l4d_m4k3s_m3_s4d}  ",
        points: "100",
        solved: false,
      },
      {
        title: "challenging ",
        description:
          "the relentless pursuit of unraveling the intricacies of reverse engineering. Like intrepid explorers navigating uncharted territories, they fearlessly delve into the depths of code, conquering each cryptic obstacle with determination and expertise. ",
        correctAnswer: "CTF{Ar@b1an_night5} ",
        points: "150",
        solved: false,
      },
      {
        title: "clubing ",
        description:
          "In a tech-driven city, Alex discovers The Clubing, a secretive group of hackers. Mastering reverse engineering alongside mentors Elena and Marcus, they become formidable. But when hunted by powerful foes, they unite to defend their underground haven. In the end, they emerge victorious, ready for new challenges ahead. ",
        correctAnswer: "ctf{eXclU51v3_0r^N0t?} ",
        points: "150",
        solved: false,
      },
      {
        title: "Hack_me_oppa ",
        description:
          "In the neon-lit streets of Tokyo, Hack_me_oppa emerges as a digital samurai, wielding code like a katana. With the precision of a bonsai master, they navigate cyberspace, blending ancient wisdom with modern technology. In this cybernetic dojo, they honor the code of the hacker with every keystroke.  ",
        correctAnswer: "CTF{3z_Drunk_R3v}  ",
        points: "200",
        solved: false,
      },
      {
        title: "Introduction  ",
        description:
          "In the land of the rising sun, Introduction is a digital sensei, guiding newcomers through the labyrinth of cyberspace with the wisdom of ancient scrolls. With each byte, they weave a tale of mastery, blending tradition with innovation in the art of cybersecurity.  ",
        correctAnswer: "CTF{steppingstone}  ",
        points: "50",
        solved: false,
      },
      {
        title: "saveyoursanity  ",
        description:
          "With each encrypted message decoded and every vulnerability patched, they safeguard the sanity of users, ensuring tranquility in a world of digital chaos.  ",
        correctAnswer: "ctf{It_h4s_b33N_345Y}  ",
        points: "150",
        solved: false,
      },
      {
        title: "you_need_key  ",
        description:
          "Like a hidden treasure waiting to be unearthed, this enigmatic key holds the power to unlock hidden doors and reveal the secrets of the digital domain. Brave adventurers seek its elusive grasp, knowing that behind every locked gate lies a new challenge waiting to be conquered.  ",
        correctAnswer: "CTF{Never_stop_learning} ",
        points: "50",
        solved: false,
      },
    ];

    for (const data of challengeData) {
      const existingChallenge = await Challenge.findOne({ title: data.title });

      if (existingChallenge) {
        await Challenge.findOneAndUpdate(
          { title: data.title },
          {
            description: data.description,
            points: data.points,
            solved: data.solved,
          }
        );
      } else {
        await Challenge.create(data);
      }
    }

    const challenges = await Challenge.find({});

    await Team.updateMany({}, { $set: { challenges: challenges } });

    const filteredChallenges = await Challenge.find(
      {},
      "title description points solved"
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

    team.points = parseInt(team.points) + parseInt(challenge.description);

    const index = team.challenges.findIndex((c) => c.title === title);
    if (index !== -1) {
      team.challenges[index].solved = true;
    }

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
      isSolved: challenge.solved || false,
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
