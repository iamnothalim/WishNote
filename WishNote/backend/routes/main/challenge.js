const Challenge = require("../../models/challenge");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("챌린지 라우터 들어왔습니다.");
});

router.post("/", (req, res, next) => {});
