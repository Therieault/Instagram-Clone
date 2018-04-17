var express = require('express');
var router = express.Router();
const Tag = require('../models/index').Tag;

function getBodyParams(req) {
  const { tag_name, image_id } = req.body;
  return {
    tag_name,
    image_id
  }
}

router.get('/:id', async (req, res) => {
  const tag = await Tag.findById(req.params.id);
  res.send(tag);
});

router.post('/',(req, res) => {
  Tag.create(getBodyParams(req))
  .then((tag) => {
    res.send(tag);
  });
});

router.put('/:id', async (req, res) => {
  const tag = await Tag.findById(req.params.id);
  await tag.update(getBodyParams(req));
  res.send(tag);
});

router.delete('/:id', (req, res) => {
  Tag.findById(req.params.id)
  .then(function(tag) {
    tag.destroy();
    console.log('tag destroyed');
  });
});

module.exports = router;
