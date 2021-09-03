const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  res.cookie("access_token", "");
  res.send({ loginSuccess: false,user: null  });
});

module.exports = router;
