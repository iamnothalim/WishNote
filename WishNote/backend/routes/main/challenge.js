const Challenge = require("../../models/challenge");
const ChallengeStatus = require("../../models/challengeStatus");
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
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
//multer setting
const upload = multer({
    storage: multer.diskStorage({
        // set a localstorage destination
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        // convert a file name
        filename: (req, file, cb) => {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});


//21.04.25 JE 챌린지 DB 등록
router.post("/", upload.single('challengeImg'),async (req, res) => {
  console.log("여긴 챌린지 등록");
  const {
    //registerId,
    category,
    challengeName,
    //howTo,
    howMany,
    startDate,
    finishDate,
    deposit,
    description,
  } = req.body;
  console.log(deposit);
  console.log(parseInt(howMany));
  console.log(req.body);
  console.log(req.user.id);
  console.log(req.file.filename);
  try {
    //등록된 챌린지인지 확인
    const exists = await Challenge.findByChallengeName(challengeName);
    if (exists) {
      return res
        .json({ success:false , msg: "That challenge already exists"});
    }
    console.log("챌린지 디비 등록 들어옴");
    const challenge = new Challenge({
      registerId:req.user.id,
      category,
      challengeName,
      howMany:parseInt(howMany),
      startDate,
      finishDate,
      deposit:parseInt(deposit),
      challengeImg:req.file.filename,
      description,
    });
    await challenge.save();

    //챌린지 현황 업데이트
    const updateChallengeState = new ChallengeStatus({
      userid: req.user.id,
      challenge_name: challengeName,
      creator: req.user.id,
      challenge_state: 0,
      category: category,
    });
    await updateChallengeState.save();

    res.json({success:true , msg:"챌린지 등록에 성공하셨습니다."});
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
