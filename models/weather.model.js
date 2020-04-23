const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  cityId: Number,
  cityName: String,
  created: Number,
  updated: Number,
  entity: {
    default: 'Weather',
    type: String,
  },
});
