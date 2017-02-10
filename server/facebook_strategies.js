const passport = require('passport');
const User = require('../database/user_schema.js')
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send('unauthorized');
};

passport.use(new FacebookStrategy({
  clientID: "208481726293870",
  clientSecret: "53a1d2974ee0af9a9b317460a84d7b3c",
  callbackURL: 'http://localhost:4000/api/facebook/callback'
},

function(token, refreshToken, profile, done) {
  process.nextTick(function() {
    console.log("finding user")
    User.find({ 'email' : profile.id }, function(err, user) {
      if (err) {
        console.log("error finding user")
        return done(err);
      }    
      if (user.length > 0) {
        console.log("user exists, logging in...")
        return done(null, user);
      } else {
        console.log("user does not exist, creating...")
        var temp = new User( {
          email: profile.id
        });
        temp.phone = temp.generateHash(Math.random());
        temp.save(function(err) {
          if (err) {
            console.log("error saving user")
            throw err;
          }
          console.log("user saved")
          return done(null, temp);
        });
      }
    });
  });
}));

module.exports = {
  isLoggedIn,
  passport
};