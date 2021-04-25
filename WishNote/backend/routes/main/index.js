const express = require("express");
const router = express.Router();
const challenge = require("./challenge");

router.use("/challenge", challenge);

router.get("/", function (req, res, next) {
  console.log("여긴 main안!!");
  res.render("index", { title: "Express" });
});

module.exports = router;
