const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  price: { type: String, required: true },
  date: { type: Date, default: Date.now },
  createdBy : {type : String, required: true} , 
  ticketBusRoute : {type : String , required : true},
  ticketBusNumber : {type : String , required : true},
  ticketCount : {type : mongoose.Schema.Types.Decimal128 , required : true } , 
  verifyID : {type : String , required: true},
  userID : {type : String , required: true}
});

const Ticket = mongoose.model("ticket", ticketSchema);
// Two feilds not mandatary

module.exports = Ticket;


