const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const ChallengeStatus = require("../../models/challengeStatus");
const Challenge = require("../../models/challenge");
const Feed = require("../../models/Feed");

router.get("/", async function (req, res, next) {
  console.log("여긴 check");
  //console.log(req);
  //console.log('asdas', req.user);
  if (!req.user) {
    try {
      //challenge 데이터들 불러오기
      const challengeInfo = await Challenge.find();
      //console.log(challengeInfo);
      const listData = [];
      for (let i = 0; i < challengeInfo.length; i++) {
        listData.push({
          herf: "/",
          challengeName: challengeInfo[i].challengeName,
          creator: challengeInfo[i].registerId,
          description: challengeInfo[i].description,
          challengeImg: challengeInfo[i].challengeImg,
          deposit: challengeInfo[i].deposit,
        });
      }
      //console.log(listData);

      res.json({ id: null, listData: listData });
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Server Error");
    }
  } else {
    try {
      const getInfo = await ChallengeStatus.findByUser(req.user.id);
      // console.log("getInfo", getInfo);
      let created = [];
      let participated = [];
      let finished = [];
      let unfinished = [];
      let categoryArr = [];
      let challengeArr = [];

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
      await getInfo.forEach((el) => {
        challengeArr.push(el.challenge_name);
      });
      //console.log("categoryArr", categoryArr);

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
      let hobby_count = dupCount[Object.keys(dupCount)[hobby]];
      let relationship_count = dupCount[Object.keys(dupCount)[relationship]];
      let performance_count = dupCount[Object.keys(dupCount)[performance]];
      let asset_count = dupCount[Object.keys(dupCount)[asset]];
      let health_count = dupCount[Object.keys(dupCount)[health]];
      //console.log(a_count,b_count,c_count,d_count,e_count);

      if (hobby_count == undefined) hobby_count = 0;
      if (relationship_count == undefined) relationship_count = 0;
      if (performance_count == undefined) performance_count = 0;
      if (asset_count == undefined) asset_count = 0;
      if (health_count == undefined) health_count = 0;

      let radarOriginData = [
        {
          name: "참여한 챌린지 갯수",
          hobby: hobby_count,
          relationship: relationship_count,
          performance: performance_count,
          asset: asset_count,
          health: health_count,
        },
      ];
      const radarTitleMap = {
        hobby: "hobby",
        relationship: "relationship",
        performance: "performance",
        asset: "asset",
        health: "health",
      };
      const radarData = [];
      radarOriginData.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (key !== "name") {
            radarData.push({
              name: item.name,
              label: radarTitleMap[key],
              value: item[key],
            });
          }
        });
      });
      // console.log("여긴 바깥", radarData);

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
      const userdata = await User.findByUserId(req.user.id);
      //console.log(userdata);
      //challenge 데이터들 불러오기
      const challengeInfo = await Challenge.find();
      //console.log(challengeInfo);
      const listData = [];
      for (let i = 0; i < challengeInfo.length; i++) {
        listData.push({
          herf: "/",
          challengeName: challengeInfo[i].challengeName,
          creator: challengeInfo[i].registerId,
          description: challengeInfo[i].description,
          challengeImg: challengeInfo[i].challengeImg,
          deposit: challengeInfo[i].deposit,
        });
      }
      const feedData = await Feed.find({ userId: req.user.id });
      console.log("이게 피드", feedData);
      if (!feedData.length == 0) {
        let feedCategory = [];
        let feedTitle = [];
        let feedCreatedAt = [];
        //console.log("feedData.category", feedData.category);
        feedData.forEach((el) => {
          feedCategory.push(el.category);
          feedTitle.push(el.title);
          feedCreatedAt.push(el.createdAt.toISOString().substring(0, 10));
        });
        console.log("feedCategory", feedCategory);
        console.log("feedCreatedAt", feedCreatedAt);
        const user = {
          nickname: userdata.nickname,
          name: userdata.name,
          id: userdata.id,
          point: userdata.point,
          habbit: radarData,
          challengeState: {
            attend: unfinished.length,
            finish: finished.length,
            create: created.length,
          },
          challengeName: challengeArr,
          feedData: {
            feedCategory: feedCategory,
            feedCreatedAt: feedCreatedAt,
            feedTitle: feedTitle,
          },
          listData: listData,
          //month:askdhk
        };
        res.json(user);
      } else {
        const user = {
          nickname: userdata.nickname,
          name: userdata.name,
          id: userdata.id,
          point: userdata.point,
          habbit: radarData,
          challengeState: {
            attend: unfinished.length,
            finish: finished.length,
            create: created.length,
          },
          challengeName: challengeArr,
          // feedData: {
          //   feedCategory: feedCategory,
          //   feedCreatedAt: feedCreatedAt,
          // },
          listData: listData,
          //month:askdhk
        };
        res.json(user);
      }
      //console.log(user);
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Server Error");
    }
  }
});
module.exports = router;
