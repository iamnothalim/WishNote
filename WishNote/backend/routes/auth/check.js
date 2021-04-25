const express = require('express');
const router = express.Router();

router.post("/",async function(req, res, next) {
    console.log('여긴 check');
    res.send('logout다잉');
} );

module.exports = router;