var express = require('express');
var router = express.Router();

// we import our album controller
var albums = require('../controllers/albums.controller');

/* GET one album 
router.get('/:albumsId', albums.findOne);

DELETE  one album 
router.delete('/:albumsId', albums.delete);
UPDATE  one album 
router.post('/:albumsId', albums.update);

 CREATE  one album */
router.put('/', albums.create);

module.exports = router;
