const mongoose = require('mongoose');

const Tracks = new mongoose.Schema(
  {
      nom: String, 
      durée: Number, 
      nb_ecoutes: Number, 
      likes: Number
  }
);

module.exports = mongoose.model('Tracks', Tracks);
