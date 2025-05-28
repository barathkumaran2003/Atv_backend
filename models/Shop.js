const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  imgurl: String,
  product:String,
  sprice:String,
});


module.exports = mongoose.model("Shop", userSchema);

