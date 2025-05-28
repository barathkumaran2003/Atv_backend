const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  heading: String,
  note:String,
  message: String,
});


module.exports = mongoose.model("Review", userSchema);

