const express = require("express");
const router = express.Router();
const challenge = require("./challenge");
const myPage = require("./myPage");
const upload = require("./upload");

router.use("/challenge", challenge);
router.use("/myPage", myPage);
router.use("/upload", upload);

router.get("/", function (req, res, next) {
  console.log("여긴 main안!!");
  res.render("index", { title: "Express" });
});

module.exports = router;
