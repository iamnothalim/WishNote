const express = require("express");
const router = express.Router();
const ChallengeStatus = require("../../models/challengeStatus");
const User = require("../../models/user");

// /api/challenge/state
// userid를 req에 보냄
router.post("/", async function (req, res) {
  const { userid } = req.body;
  const getInfo = await ChallengeStatus.findByUser(userid);
  console.log("getInfo", getInfo);
  let created = [];
  let participated = [];
  let finished = [];
  let unfinished = [];
  let categoryArr = [];

  /*
  try {
    console.log("여긴 챌린지 현황 상태 조회");
    await getInfo.forEach((el) => {
      if (el.userid == el.creator) {
        created.push(el);
      } else {
        participated.push(el);
      }
    });
    let data = [];
    let habitData = {};
    let count = 0;
    let num = 0;
    //내 챌린지 정보들 중 카테고리만 뽑아오기
    await getInfo.forEach((el) => {
      categoryArr.push(el.category);
    });
    console.log("categoryArr", categoryArr);
    //챌린지 유형 갯수 파악하기

    await categoryArr.forEach((el) => {
      console.log("el", el);
      const habitList = [
        "hobby",
        "relationship",
        "performance",
        "asset",
        "health",
      ];
      const map1 = array1.map((x) => x * 2);
      for (let i = 0; i < habitList.length; i++) {
        if (habitList[i] === el) {
          habitData.hobby = habitList[i];
          console.log("i", i, "habitList[i]", habitList[i]);
          count++;
          console.log("count", count);
        } else if (habitList[i] !== el) {
        }
        console.log("habitData", habitData);
        data.push(habitData);
        console.log("data", data);
      }
    });
*/
    //console.log('개설: ',created.length);
    participated.forEach((el) => {
      if (el.challenge_state == 1) {
        finished.push(el);
      } else {
        unfinished.push(el);
      }
    })
    //console.log('참가중: ',unfinished.length);
    //console.log('완료: ',finished.length);
    /////////////////////////////////////////////
    console.log("여긴 보유 포인트 상태 조회");
    const user = await User.findByUsername(userid);
    const userPoint = user.point;

    res.json({
      "참가중: ": unfinished.length,
      "완료: ": finished.length,
      "개설: ": created.length,
      "보유 캐시": userPoint,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
  //res.send('조회 성공!');
});

/*
{
    "userid" : "haggo",
    "challengename":"",
    "category":"hobby"
}
*/

// /api/challenge/state/participate
router.post("/participate", async function (req, res) {
  console.log("여기여기여기여기여기", req.body);
  const { userid, category } = req.body;
  try {
    const exists = await ChallengeStatus.findByChallengeName(challengename);
    if (exists.userid == userid) {
      return res
        .status(400)
        .json({ error: [{ msg: "That challenge already participated" }] });
    }
    const createChallengeState = new ChallengeStatus({
      userid: userid,
      // challenge_name: challengename,
      creator: exists.creator,
      challenge_state: 0,
      category: category,
    });
    await createChallengeState.save();
    res.send("챌린지 참가 신청 완료");
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
