const Tracks = require('../models/tracks.model.js');

// Create and Save a new tracks
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'le nom ne peut pas etre vide'
    });
  }

  // Create a new tracks
  const tracks = new Tracks({
    nom: req.body.nom,
    durée: req.body.durée, 
    nb_ecoutes: req.body.nb_ecoutes,
    likes: req.body.likes || ''

  });

  // Save tracks in the database
  tracks
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly tracks integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new tracks in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the tracks.'
      });
    });
};

/*
// Retrieve and return all trackss from the database.
exports.findAll = (req, res) => {
  tracks.find()
    .then(tracks => {
      res.send(tracks);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving trackss.'
      });
    });
};

// Find a single tracks with a tracksId
exports.findOne = (req, res) => {
  tracks.findById(req.params.tracksId)
    .then(tracks => {
      if (!tracks) {
        return res.status(404).send({
          message: 'tracks not found with id ' + req.params.tracksId
        });
      }
      res.send(tracks);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'tracks not found with id ' + req.params.tracksId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving tracks with id ' + req.params.tracksId
      });
    });
};
*/