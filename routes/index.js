var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  db.User.findAll({
    include: [ db.Task ]
  }).success(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    })
  })
});

module.exports = router;

var db = require('../models')

