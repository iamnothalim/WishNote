const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const write = require("./write");
=======
const feed = require('./feed');
// const list = require('./list');

router.use('/feed',feed);
// router.use('/list',list);

>>>>>>> origin/JJ

router.use("/write", write);

// router.get("/", function(req, res, next) {
//   console.log('여긴 feed의  index안!!');
// //   res.render('index', { title: 'Express' });
// } );

module.exports = router;
