var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log('여긴 main안!!');
  res.render('index', { title: 'Express' });
} );

module.exports = router;



