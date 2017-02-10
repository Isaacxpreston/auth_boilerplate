const express = require('express');
const path = require('path')
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const webpack = require('webpack');
const passportRoute = require('./passport_router.js')
const config = require('../webpack.config.js');

// APP SETUP & MIDDLEWARE
const app = express();
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
mongoose.connect('mongodb://localhost/auth_boilerplate2');
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use('/api', passportRoute)

app.get("*", (req, res) => (
  res.sendFile(path.resolve(__dirname, '../client/app', 'index.html'))
));

const PORT = process.env.PORT || 4000

app.listen(PORT, () => (
  console.log("App running on port ", PORT)
))