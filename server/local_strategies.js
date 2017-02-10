const passport = require('passport');
const User = require('../database/user_schema.js')
const express = require('express');
const LocalStrategy = require('passport-local').Strategy;

//-SESSIONS
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//-AUTH
passport.use('login',
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'phone'
  }, (email, phone, done) => {
    User.findOne({
      'email': email
    }, (err, data) => {
      if (!data) {
        console.log('user not found');  
        return done(null, false);
      }
      if (!data.comparePassword(phone)) {
        console.log('invalid phone');
        return done(null, false);
      } else {
        return done(null, email);
      }
    });
  })
);

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'phone'
  }, (email, phone, done) => {
  process.nextTick(() => {
    User.find({'email': email}, (err, data) => {
      if (!data.length) {
        const temp = new User({
          email
        });
        temp.phone = temp.generateHash(phone);
        temp.save(err => {
          if (err) {
            throw err;
          }
          console.log('registered user', email);
          return done(null, email);
        });
      } else {
        console.log('user already exists');
        return done(null, false);
      }
    });
  });
}));

module.exports = passport
