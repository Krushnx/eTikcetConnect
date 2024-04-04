const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  passwordHash: { type: String, required: true },
  isConductor : {type : Boolean , required : true , default:false},
  busRoute :{type : String} , 
  busNumber : {type : String} , 
  userID: {type : String} 
});

const User = mongoose.model("user", userSchema);

module.exports = User;
