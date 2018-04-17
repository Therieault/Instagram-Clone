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
  res.send(image);
});

router.post('/', (req, res) => {
  Image.create(getBodyParams(req))
  .then((image) => {
    res.send(image);
  });
});

router.put('/:id', async (req, res) => {
  const image = await Image.findById(req.params.id);
  await image.update(getBodyParams(req));
  res.send(image);
});

router.delete('/:id', (req, res) => {
  Image.findById(req.params.id)
  .then(function(image) {
    image.destroy();
    console.log('image destroyed');
  });
});

module.exports = router;
