const express = require("express");
const router = express.Router();

const feed = require("./feed");

router.use("/", feed);

module.exports = router;
