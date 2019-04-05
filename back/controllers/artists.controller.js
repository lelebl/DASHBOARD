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


/*exports.findBest = (req, res) => {

  const artists1 = new Artists({
    nom: req.body.nom,
    birth: req.body.birth, 
    followers: 0 || ''

  });

  artists.find()
  .then(artists => {
    artists.forEach();
}

}*/

// Retrieve and return all artists from the database.
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

// Find a single artists with a artistsId
exports.findOne = (req, res) => {
  Artists.findById(req.params._id)
    .then(artists => {
      if (!artists) {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params._id
        });
      }
      res.send(artists);
    })
    .catch(err => {
      if (err.kind === '_id') {
        return res.status(404).send({
          message: 'artists not found with id ' + req.params._id
        });
      }
      return res.status(500).send({
        message: 'Error retrieving artists with id ' + req.params._id
      });
    });
}; 
/*

exports.findOne = (req, res) =>{
  Artists.where("followers").gt(12345).then(artists=>{
    res.send(artists);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving artistss.'
    });
})
}
*/