const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  location: String,         // Property Location
  status: String,           // Status (buy/rent)
  type: String,             // Type (commercial/residential)
  value: Number             // Property Value
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
