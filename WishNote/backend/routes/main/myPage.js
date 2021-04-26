/*
월간 리포트
마이페이지 월간 리포트 데이터 받아오는 프로세스
1. 월간 리포트에 필요한 데이터
- 피드 데이터 : category, writer ID, 인증 게시물 올린 날짜
username:"halim",
writingDate:2021-04-30T00:00:00.000+00:00

2. 마이페이지에 필요한 월간 리포트 라우터 
- GET : /myPage/author/:author
*/

const express = require("express");
const router = express.Router();
const checkLoggedIn = require("../../lib/checkLoggedIn");
const ChallengeSchema = require("../../models/challenge");

router.get("/", checkLoggedIn, (req, res) => {
  console.log("마이페이지 그냥 들어왔습니다. ");
  ChallengeSchema.find((err, challenges) => {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json(challenges);
    console.log("마이페이지 로딩 완료");
  });
});

router.get("/:category", checkLoggedIn, (req, res) => {
  console.log("마이페이지 카테고리별로 들어왔습니다.");
  ChallengeSchema.findOne(
    { category: req.params.category },
    (err, challenges) => {
      if (err) return res.status(500).send({ error: "database failure" });
      if (!challenges)
        return res.status(404).json({ error: "challenge not found" });
      res.json(challenges);
    }
  );
  //res.send("마이페이지 로딩 완료");
});

module.exports = router;
/*
획득 습관
마이페이지 획득 습관 데이터 받아오는 프로세스
1. 획득 습관에 필요한 데이터
- 챌린지 데이터 : registerId, category, finishDate
username:"halim",
writingDate:2021-04-30T00:00:00.000+00:00

2. 마이페이지에 필요한 획득 습관 라우터 
- GET : /myPage/author/:author
*/

/*
챌린지 현황
마이페이지 챌린지 현황 데이터 받아오는 프로세스
1. 챌린지 현황에 필요한 데이터
- 챌린지 데이터 : registerId, finishDate
- 챌린저스 데이터 : UserId
username:"halim",
writingDate:2021-04-30T00:00:00.000+00:00

2. 마이페이지에 필요한 챌린지 현황 라우터 
- GET : /myPage/author/:author
*/
