var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET login page. */
router.post('/login', function(req, res, next) {
  res.render('login');
});

/* GET logged out */
router.post('/logout', function(req, res, next) {
  res.render('logout');
});

/* GET registered. */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

/* POST registered. */
router.post('/signup', function(req, res, next) {
  res.render('signup');
});

/* GET New Joke Form. */
router.get('/new', function(req, res, next) {
  res.render('new');
});

/* POST new pickup line. */
router.post('/new', function(req, res, next) {
  res.render('new');
});

module.exports = router;
