const express = require('express');
const router = express.Router();

const feed = require('./feed');
// const list = require('./list');

router.use('/feed',feed);
// router.use('/list',list);



// router.get("/", function(req, res, next) {
//   console.log('여긴 feed의  index안!!');
// //   res.render('index', { title: 'Express' });
// } );

module.exports = router;
