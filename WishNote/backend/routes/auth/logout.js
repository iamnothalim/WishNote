const express = require('express');
const router = express.Router();

router.post("/",async function(req, res, next) {
    console.log('여긴 로그아웃');
    res.cookie("access_token","");
    res.send('logout다잉');
} );

module.exports = router;