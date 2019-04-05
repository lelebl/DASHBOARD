const Artists = require('../models/artists.model.js');

// Create and Save a new artists
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'le nom ne peut pas etre vide'
    });
  }

  // Create a new artists
  const artists = new Artists({
    nom: req.body.nom,
    birth: req.body.birth, 
    followers: req.body.followers || ''

  });

  // Save artists in the database
  artists
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly artists integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new artists in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the artists.'
      });
    });
};

// Retrieve and return all artistss from the database.
exports.findAll = (req, res) => {
  Artists.find()
    .then(artists => {
      res.send(artists);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving artistss.'
      });
    });
};


/// recuperer l'artiste avec le plus de followers
exports.bestfollower = (req,res)=>{
  var bestArtist = new Artists({
    nom: "",
    birth: "", 
    followers: 0

  });;
  Artists.find()
  .then(artists =>{
  artists.forEach(element => {
    if(element.followers >= bestArtist.followers){
    bestArtist=element;}
  });
  })
  .then(function(){
    res.json({artist:bestArtist});
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while followers.'
    });
  });
  
  
  };
  

/*
// Find a single artists with a artistsId
exports.findOne = (req, res) => {
  artists.findById(req.params.artistsId)
    .then(artists => {
      if (!artists) {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params.artistsId
        });
      }
      res.send(artists);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params.artistsId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving artists with id ' + req.params.artistsId
      });
    });
};

// Delete a artists with the specified artistsId in the request
exports.delete = (req, res) => {
  artists.findByIdAndRemove(req.params.artistsId)
    .then(artists => {
      if (!artists) {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params.artistsId
        });
      }
      res.send({ message: 'artists deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params.artistsId
        });
      }
      return res.status(500).send({
        message: 'Could not delete artists with id ' + req.params.artistsId
      });
    });
};*/