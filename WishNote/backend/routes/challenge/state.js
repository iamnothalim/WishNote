const express = require("express");
const router = express.Router();
const ChallengeStatus = require("../../models/challengeStatus");
const User = require("../../models/user");


// /api/challenge/state
// userid를 req에 보냄
router.post("/",async function(req,res){
    const {userid} = req.body;
    const getInfo = await ChallengeStatus.findByUser(userid);
    //console.log(getInfo);
    let created = [];
    let participated = [];
    let finished = [];
    let unfinished = [];
    try {
        console.log('여긴 챌린지 현황 상태 조회');
        await getInfo.forEach(el => {
            if(el.userid == el.creator){
                created.push(el);
            }else{
                participated.push(el);
            }
        });
        //console.log('개설: ',created.length);
        participated.forEach(el => {
            if(el.challenge_state == 1){
                finished.push(el);
            }else{
                unfinished.push(el);
            }
        });
        //console.log('참가중: ',unfinished.length);
        //console.log('완료: ',finished.length);
        /////////////////////////////////////////////
        console.log('여긴 보유 포인트 상태 조회');
        const user= await User.findByUsername(userid);
        const userPoint = user.point;
        
        res.json({

                '참가중: ':unfinished.length,
                '완료: ':finished.length,
                '개설: ':created.length,
                '보유 캐시': userPoint,
            
        })
    } catch (e) {
        console.log(e.message);
        res.status(500).send("server error");
    }
    //res.send('조회 성공!');
})

/*
{
    "userid" : "haggo",
    "challengename":"soccer"
}
*/

// /api/challenge/state/participate
router.post("/participate",async function(req,res){
    const {
        userid,
        challengename,
    } = req.body;
    try {
        const exists = await ChallengeStatus.findByChallengeName(challengename);
        if (exists.userid == userid) {
            return res
                .status(400)
                .json({ error: [{ msg: "That challenge already participated" }] });
        }
        const createChallengeState = new ChallengeStatus({
            userid:userid,
            challenge_name:challengename,
            creator:exists.creator,
            challenge_state:0
        });
        await createChallengeState.save();
    
        res.send("챌린지 참가 신청 완료")
    } catch (e) {
        console.log(e.message);
        res.status(500).send("server error");
    }
})


module.exports = router;