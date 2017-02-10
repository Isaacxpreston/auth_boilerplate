const passport = require('passport');
const User = require('../database/user_schema.js')
const FacebookStrategy = require('passport-facebook').Strategy;

//-SESSIONS
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

// facebook will send back the token and profile
function(token, refreshToken, profile, done) {
  // asynchronous
  process.nextTick(function() {
    console.log("finding user")
    // find the user in the database based on their facebook id
    User.find({ 'email' : profile.id }, function(err, user) {
      // if there is an error, stop everything and return that
      // ie an error connecting to the database
      if (err) {
        console.log("error finding user")
        return done(err);
      }    
      // if the user is found, then log them in
      if (user.length > 0) {
        console.log("user exists", user)
        return done(null, user); // user found, return that user
      } else {
        console.log("user does not exist, creating...")
        // if there is no user found with that facebook id, create them
        var temp = new User();
        // set all of the facebook information in our user model
        temp.email = profile.id; // set the users facebook id    
        temp.phone = temp.generateHash("REPLACE");               
        // temp.facebook.token = token; // we will save the token that facebook provides to the user                    
        // temp.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
        // temp.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
        // save our user to the database
        temp.save(function(err) {
          if (err) {
            console.log("error saving user")
            throw err;
          }   
          // if successful, return the new user
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