const express = require('express');
const router = express.Router();

router.post("/",async function(req, res, next) {
    console.log('여긴 check');
    const user = req.user;
    if (!req.user) {
        res.status(401).json({errors:[{msg:"did not logged in"}]});;
        return;
    }
    res.json(user);
} );

module.exports = router;