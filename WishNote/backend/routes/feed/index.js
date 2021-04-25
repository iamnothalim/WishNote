const express = require('express');
const router = express.Router();

const write = require('./write');

router.use('/write',write);



// router.get("/", function(req, res, next) {
//   console.log('여긴 feed의  index안!!');
//   res.render('index', { title: 'Express' });
// } );

module.exports = router;
