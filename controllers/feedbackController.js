// controllers/feedbackController.js

const Feedback = require('../models/feedbackSchema');

exports.submitFeedback = async (req, res) => {
  try {
    const { feedback, suggestion, rating } = req.body;
    const newFeedback = new Feedback({ feedback, suggestion, rating });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
