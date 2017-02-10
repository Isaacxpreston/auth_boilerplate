const local = require('./local_strategies.js');
const facebook = require('./facebook_strategies.js')
const express = require('express');
const router = express.Router()

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send('unauthorized');
};

router.get('/facebook', facebook.authenticate('facebook', { scope : 'email' }));

router.get('/facebook/callback',
  facebook.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.post('/signin', local.authenticate('login'), (req, res) => {
  res.end();
});

router.post('/signup', local.authenticate('signup'), (req, res) => {
  res.end();
});

router.get('/isAuthenticated', isLoggedIn, (req, res) => {
  res.send("authorized");
});

router.get('/logout', (req, res) => {
  req.logout();
  res.end();
});

module.exports = router