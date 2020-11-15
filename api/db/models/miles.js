const mongoose = require('mongoose');

const milesSchema = new mongoose.Schema({
  odemeter : {
    type: Number,
    required: true,
    trim: true,
    default: 0
  },
  date: {
    type: Date,
    required: false,
  },
  gallons: {
    type: Number,
    required: false,
    trim: true,
    default: 0
  },
  cost: {
    type: Number,
    required: false,
    default: 0.00
  }
});

const Miles = mongoose.model('Miles', milesSchema);

module.exports = Miles