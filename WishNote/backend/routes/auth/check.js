const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  console.log("여긴 check");

  if (!req.user) {
    res.json({ isAuth: false });
    return;
  } else {
    const user = req.user;
    res.json(user);
  }
});

module.exports = router;
