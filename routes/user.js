var express = require('express');
var router = express.Router();
const User = require('../models/index').User;

module.exports =function(passport) {

  function getBodyParams(req) {
    const { username, email, password } = req.body;
    return {
      username,
      email,
      password
    }
  };

  router.get('/signup', function(req,res) {
    res.render('signup.ejs');
  });

  router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.json({ user: req.user});
    res.redirect('/user');
  });

  router.get('/login', function(req, res) {
    res.render('login.ejs');
  });

  router.post('/login', passport.authenticate('local-login'), function(req, res) {
    res.json({user: req.user})
    .then(res.redirect('/user'));
  });

  router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
  });

  router.get('/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
  });

  router.put('/:id', async (req, res) => {
      const user = await User.findById(req.params.id);
      await user.update(getBodyParams(req));
      res.send(user);
  });

  router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
      .then(function(user) {
        user.destroy();
        console.log('user destroyed');
    });
  });

  return router;
}
