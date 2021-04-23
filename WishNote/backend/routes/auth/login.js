var express = require('express');
var router = express.Router();


router.get("/", function(req, res, next) {
    console.log('여긴 로그인');
    res.send('login다잉');
} );

module.exports = router;