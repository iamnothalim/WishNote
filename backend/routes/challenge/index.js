const express = require("express");
const router = express.Router();

const state = require("./state");

router.use("/state", state);

module.exports = router;
