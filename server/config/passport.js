var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var User = require('../models/user.js');
var config = require('./database.js');

module.exports = function(passport){
  //Local Strategy
  passport.use(new LocalStrategy(function(username, password, done){
    //Match Username
    var query = {username:username};
    User.findOne(query,function(err,user){
      if(err) throw err;
      if(!user){
        return done(null, false, {msg: 'No user found'});
      }
      //Match password
      if(user.checkPassword(password)){
        return done(null, user);
      }else{
        return done(null, false, {msg: 'Password does not match'});
      }
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
