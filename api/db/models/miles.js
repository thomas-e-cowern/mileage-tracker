const mongoose = require('mongoose');

const milesSchema = new mongoose.Schema({
  odometer : {
    type: String,
    required: true,
    trim: true,
    default: 0
  },
  date: {
    type: String,
    required: false,
  },
  gallons: {
    type: String,
    required: false,
    trim: true,
    default: 0
  },
  cost: {
    type: String,
    required: false,
    default: 0.00
  }
});

const Miles = mongoose.model('Miles', milesSchema);

module.exports = Miles