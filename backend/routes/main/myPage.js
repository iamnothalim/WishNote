
//21.04.26 JE 마이페이지 데이터 조회
const express = require("express");
const router = express.Router();
const checkLoggedIn = require("../../lib/checkLoggedIn");
const Challenge = require("../../models/challenge");

router.get("/", checkLoggedIn, (req, res) => {
  Challenge.find((err, challenges) => {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json({ challengeName: challenges[0].challengeName });
  });
});

router.get("/:category", checkLoggedIn, (req, res) => {
  Challenge.findOne({ category: req.params.category }, (err, challenges) => {
    if (err) return res.status(500).send({ error: "database failure" });
    if (!challenges)
      return res.status(404).json({ error: "challenge not found" });
    res.json(challenges);
  });
});

module.exports = router;

