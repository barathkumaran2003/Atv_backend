const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email:String,
  phone: String,
  message: String,
});


module.exports = mongoose.model("Connect", userSchema);

