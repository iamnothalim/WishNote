const Challenge = require("../../models/challenge");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("챌린지 등록에 들어왔습니다.");
});

/*
postman : post =>http://localhost:8001/challenge
{
    "registerId" : "je", 
    "category": "health",
    "challengeName" : "VIT-AMeans", 
    "howTo": "인증샷", 
    "howMany" : 3,
    "startDate" : "2021-04-25",
    "finishDate" : "2021-05-25",
    "deposit" : 6000
}
*/

//21.04.25 JE 챌린지 DB 등록
router.post("/", async (req, res) => {
  console.log("여긴 챌린지 등록");
  const {
    registerId,
    category,
    challengeName,
    howTo,
    howMany,
    startDate,
    finishDate,
    deposit,
  } = req.body;
  try {
    //등록된 챌린지인지 확인
    const exists = await Challenge.findByChallengeName(challengeName);
    if (exists) {
      return res
        .status(400)
        .json({ error: [{ msg: "That challenge already exists" }] });
    }
    console.log("챌린지 디비 등록 들어옴");
    const challenge = new Challenge({
      registerId,
      category,
      challengeName,
      howTo,
      howMany,
      startDate,
      finishDate,
      deposit,
    });
    await challenge.save();
    res.send("챌린지 등록 성공");
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
