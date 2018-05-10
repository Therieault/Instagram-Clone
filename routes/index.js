var express = require('express');
var router = express.Router();
const Image = require('../models/index').Image;

router.get('/', async function(req, res) {
  const images = await Image.findAll();
    res.render('index.ejs', {images: images});
});

router.get('/new', function(req, res) {
  res.render('new_image.ejs');
});

module.exports = router;
