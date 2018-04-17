var express = require('express');
var router = express.Router();
const Comment = require('../models/index').Comment;

function getBodyParams(req) {
  const { description, image_id, user_id, username } = req.body;
  return {
    description,
    image_id,
    user_id,
    username
  }
}

router.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.send(comments);
});

router.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  res.send(comment);
});

router.post('/', (req, res) => {
  Comment.create(getBodyParams(req))
  .then((comment) => {
    res.send(comment);
  });
});

router.put('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  await comment.update(getBodyParams(req));
  res.send(comment);
});

router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
  .then(function(comment) {
    comment.destroy();
    console.log('comment deleted');
  });
});

module.exports = router;
