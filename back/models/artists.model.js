const mongoose = require('mongoose');

const Artists = new mongoose.Schema(
  {
      nom: String, 
      birth: String, 
      followers: Number
  }
);

module.exports = mongoose.model('Artists', Artists);
