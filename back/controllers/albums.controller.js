const Albums = require('../models/albums.model.js');

// Create and Save a new albums
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'le nom ne peut pas etre vide'
    });
  }

  // Create a new Album
  const albums = new Albums({
    nom: req.body.nom,
    date: req.body.date, 
    genre: req.body.genre,
    cover_picture_url: req.body.cover_picture_url || ''

  });

  // Save albums in the database
  albums
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly albums integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new albums in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the albums.'
      });
    });
};

// Retrieve and return all albumss from the database.
exports.findAll = (req, res) => {
  Albums.find()
    .then(albums => {
      res.send(albums);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving albumss.'
      });
    });
};

exports.diff = (req,res)=>{
  var genre = "Rap";
  var diff = 0;
  Albums.find()
  .then(albums =>{
  albums.forEach(element => {
    if(element.genre == genre){
    diff++;}

  });
  })
  .then(function(){
    res.json({diff: diff, genre: genre});
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while recent.'
    });
  });
  
  
  };
  exports.nbrAlbum = (req,res)=>{

    var nbr = 0;
    Albums.find()
    .then(albums =>{
    albums.forEach(element => {
      nbr++;
    });
    })
    .then(function(){
      res.json({nbr:nbr});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while recent.'
      });
    });
    
    
    };

/*
// Find a single albums with a albumsId
exports.findOne = (req, res) => {
  albums.findById(req.params.albumsId)
    .then(albums => {
      if (!albums) {
        return res.status(404).send({
          message: 'albums not found with id ' + req.params.albumsId
        });
      }
      res.send(albums);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'albums not found with id ' + req.params.albumsId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving albums with id ' + req.params.albumsId
      });
    });
};

// Delete a albums with the specified albumsId in the request
exports.delete = (req, res) => {
  albums.findByIdAndRemove(req.params.albumsId)
    .then(albums => {
      if (!albums) {
        return res.status(404).send({
          message: 'albums not found with id ' + req.params.albumsId
        });
      }
      res.send({ message: 'albums deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'albums not found with id ' + req.params.albumsId
        });
      }
      return res.status(500).send({
        message: 'Could not delete albums with id ' + req.params.albumsId
      });
    });
};*/