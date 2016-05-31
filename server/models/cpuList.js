var mongoose = require('mongoose');

// Create the MovieSchema.
var cpuSchema = new mongoose.Schema({
  processor: {
    type: String,
    required: true
  },
  hashrate: {
    type: String,
    required: true
  }
});

// Export the model.
module.exports = mongoose.model('cpu', cpuSchema);
