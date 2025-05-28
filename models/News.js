const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  img: String,
  ndate:String,
  heading:String,
  content: String,
});


module.exports = mongoose.model("News", userSchema);

