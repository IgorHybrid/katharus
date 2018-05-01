var express = require('express');
var passport = require('passport');
var router = express.Router();

//Validations
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

//User Schema
var User = require('../models/user');

// GET '/'
router.get('/', function(req, res){
  res.render('index');
});

//GET '/about'
router.get('/about', function(req, res){
  res.render('index');
});

//GET '/sign-up'
router.get('/sign-up', function(req, res){
  res.render('index');
});

//POST '/sign-up'
router.post('/sign-up',
  [
    check('username').exists().isLength({min:1}).withMessage('Username can not be empty.'),
    check('email').isEmail().withMessage('You must use a valid email.'),
    check('password').isLength({min:8}).matches(/\d/).withMessage('Password must be at last 8 chars length and contain a number.'),
    check('confirmPassword', 'Incorrect password, try again.').exists().custom((value, { req }) => value === req.body.password)
  ],
  function(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    const data = matchedData(req);
    var user = new User(data);

    user.save(function(err, docs){
      if (err) return res.status(422).json({ errors: err });
      res.status(201).send({id: docs._id});
    });
});

//GET 'log-in'
router.get('/log-in', function(req, res){
  res.render('index');
});

//POST 'log-in'
router.post('/log-in',function(req, res, next){
  passport.authenticate('local',function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(422).send({msg: 'Mal'}) }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.status(200).send({msg: 'Login Correct'});
    });
  })(req, res, next);
});


module.exports = router;
