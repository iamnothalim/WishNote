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

  try {
    console.log("여긴 챌린지 현황 상태 조회");
    await getInfo.forEach((el) => {
      if (el.userid == el.creator) {
        created.push(el);
      } else {
        participated.push(el);
      }
    });

    await getInfo.forEach((el) => {
      categoryArr.push(el.category);
    });
    console.log("categoryArr", categoryArr);

    //////////////////
    //중복된 요소 갯수 추출 함수
    const dupCounter = function (accumulator, val, index, array) {
      if (accumulator.hasOwnProperty(val)) {
        accumulator[val] = accumulator[val] + 1;
      } else {
        accumulator[val] = 1;
      }
      return accumulator;
    };

    //위 함수 실행 맟 확인
    const dupCount = categoryArr.reduce(dupCounter, {});

    //a,b,c,d,e인덱스 순서 알아내기
    const hobby = Object.keys(dupCount).indexOf("hobby");
    const relationship = Object.keys(dupCount).indexOf("relationship");
    const performance = Object.keys(dupCount).indexOf("performance");
    const asset = Object.keys(dupCount).indexOf("asset");
    const health = Object.keys(dupCount).indexOf("health");
    //console.log(a,b,c,d,e)

    //해당 인덱스 키값 알아내기 (갯수 알아내기)
    const hobby_count = dupCount[Object.keys(dupCount)[hobby]];
    const relationship_count = dupCount[Object.keys(dupCount)[relationship]];
    const performance_count = dupCount[Object.keys(dupCount)[performance]];
    const asset_count = dupCount[Object.keys(dupCount)[asset]];
    const health_count = dupCount[Object.keys(dupCount)[health]];
    //console.log(a_count,b_count,c_count,d_count,e_count);
    //객체 반환
    let data_hobby = {};
    if (hobby !== "0") {
      data_hobby.habbit = "hobby";
      if (hobby_count == 0) data_hobby.count = 0;
      data_hobby.count = hobby_count;
    }
    let data_relationship = {};
    if (relationship !== "0") {
      data_relationship.habbit = "relationship";
      data_relationship.count = relationship_count;
    }
    let data_performance = {};
    if (performance !== "0") {
      data_performance.habbit = "performance";
      data_performance.count = performance_count;
    }
    let data_asset = {};
    if (asset !== "0") {
      data_asset.habbit = "asset";
      if (asset_count == undefined) {
        console.log("제발 좀 찍혀라 ㅅㅂ");
        data_asset.count = 0;
      }
      data_asset.count = asset_count;
    }
    let data_health = {};
    if (health !== "0") {
      data_health.habbit = "health";
      data_health.count = health_count;
    }
    let data = {
      data_hobby,
      data_relationship,
      data_performance,
      data_asset,
      data_health,
    };
    //{ hobby: 2, relationship: 1, performance: 1, asset: 0, health: 0 }

    //console.log('개설: ',created.length);
    participated.forEach((el) => {
      if (el.challenge_state == 1) {
        finished.push(el);
      } else {
        unfinished.push(el);
      }
    });
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
      data: data,
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
