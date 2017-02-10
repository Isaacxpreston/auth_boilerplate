const local = require('./local_strategies.js');
const facebook = require('./facebook_strategies.js')
const express = require('express');
const router = express.Router();

router.get('/facebook', facebook.passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback',
  facebook.passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.post('/login', local.passport.authenticate('login'), (req, res) => {
  res.end();
});

router.post('/signup', local.passport.authenticate('signup'), (req, res) => {
  res.end();
});

router.get('/isAuthenticated', local.isLoggedIn, (req, res) => {
  res.end();
});

router.get('/logout', (req, res) => {
  req.logout();
  res.end();
});

module.exports = router