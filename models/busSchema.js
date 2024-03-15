const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  route: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required : true
  }
});

const busSchema = new mongoose.Schema({
  busRoute: { 
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  stops: {
    type: [String],
    required: true
  },
  prices: {
    type: [priceSchema],  // Embed the priceSchema in the busSchema
    required: true
  } ,
  timetable : {
    type : [String],
    required:true
  }
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
