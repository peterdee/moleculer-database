const { Schema } = require('mongoose');

module.exports = Schema({
  cityId: Number,
  cityName: String,
  latitude: String,
  longitude: String,
  parent: Object,
  sources: Array,
  sunRise: String,
  sunSet: String,
  svgLink: String,
  timezone: String,
  weather: Array,
  created: Number,
  updated: Number,
  entity: {
    default: 'Forecast',
    type: String,
  },
});
