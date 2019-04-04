const mongoose = require('mongoose');

const Albums = new mongoose.Schema(
  {
      nom: String, 
      date: String, 
      genre: String, 
      cover_picture_url: String
  }
);

module.exports = mongoose.model('Albums', Albums);
