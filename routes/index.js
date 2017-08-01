var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login Page' });
});

router.get('/resturents', function(req, res, next) {
    res.render('resturents', { title: 'Resturent Page' });
});

module.exports = router;
