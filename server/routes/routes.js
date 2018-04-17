var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index')
});

router.get('/about', function(req, res){
  res.render('index')
});

router.get('/sign-up', function(req, res){
  res.render('index')
});

router.get('/log-in', function(req, res){
  res.render('index')
});


module.exports = router;
