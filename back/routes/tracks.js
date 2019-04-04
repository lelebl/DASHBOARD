var express = require('express');
var router = express.Router();

// we import our tracks controller
var tracks = require('../controllers/tracks.controller');

/* GET one tracks 
router.get('/:tracksId', tracks.findOne);

/* DELETE  one tracks 
router.delete('/:tracksId', tracks.delete);
/* UPDATE  one tracks 
router.post('/:tracksId', tracks.update);

/* CREATE  one tracks */
router.put('/', tracks.create);

module.exports = router;
