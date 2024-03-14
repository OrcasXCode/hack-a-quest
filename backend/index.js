const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
database.connect();

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
