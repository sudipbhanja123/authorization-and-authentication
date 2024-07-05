const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGODB_CONNECTION_URL);

const userScheema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});
module.exports = mongoose.model("user", userScheema);
