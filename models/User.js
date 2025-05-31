const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email:String,
  phonenumber:String,
  userType:String,
});


module.exports = mongoose.model("User", userSchema);

