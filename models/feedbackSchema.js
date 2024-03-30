// models/feedbackSchema.js

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback: {
    type: String,
    required: true
  },
  suggestion: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
