var express = require('express');
var router = require('./routes/routes.js');
var config = require('./config/database.js');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());

app.use(session({ cookie: { maxAge: 60000 },
                  secret: config.secret,
                  resave: false,
                  saveUninitialized: false}));
mongoose.connect(config.database);

//Passport Config
require('./config/passport')(passport);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
  var cookie = req.cookies.user;
  if (cookie === undefined && req.user)
  {
    // no: set a new cookie
    var user = {username: req.user.username, id: req.user._id};
    res.cookie('user', JSON.stringify(user), { maxAge: 3600 });
    console.log('cookie created successfully');
  }
  next(); // <-- important!
});

//Routes
app.use('/', router);

module.exports = app;
