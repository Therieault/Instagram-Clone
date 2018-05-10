var express = require('express');
var router = express.Router();
const User = require('../models/index').User;
const Image = require('../models/index').Image;
const Comment = require('../models/index').Comment;
const Tag = require('../models/index').Tag;

function getBodyParams(req) {
  const { src, user_id, tag_id } = req.body;
  return {
    src,
    user_id,
    tag_id
  }
}

router.get('/', async (req, res) => {
  const images = await Image.findAll();
  res.send(images);
});

router.get('/:id', async (req, res) => {
  const image = await Image.findById(req.params.id);
  res.render('show_image.ejs', {image: image});
});


router.post('/new', (req, res) => {
  Image.create(getBodyParams(req))
  .then((image) => {
    res.send(image);
  });
});

router.get('/:id/edit', async (req, res) => {
  const image = await Image.findById(req.params.id);
  res.render('edit_image.ejs', {image:image});
});

router.put('/:id', async (req, res) => {
  const image = await Image.findById(req.params.id);
  await image.update(getBodyParams(req));
  res.redirect('/:id');
});

router.delete('/:id', (req, res) => {
  Image.findById(req.params.id)
  .then(function(image) {
    image.destroy();
    res.redirect('/');
 });
});

module.exports = router;
