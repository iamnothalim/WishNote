var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    console.log('여긴 로그아웃');
    res.send('logout다잉');
} );

module.exports = router;