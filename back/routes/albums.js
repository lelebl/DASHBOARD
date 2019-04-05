var express = require('express');
var router = express.Router();

// we import our album controller
var albums = require('../controllers/albums.controller');
/*
router.get('/:albumsId', albums.findOne);

/* CREATE  one album */
router.put('/', albums.create);

module.exports = router;
