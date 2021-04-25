const Feed = require('../../models/feed');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('챌린지 인증 라우터 On');
});

//21.04.25 피드 DB등록

router.post('/', async(req,res)=>{
    console.log('피드 등록 On');
    const {
        registerId,
        uploadDate,
        challengeImg,
        challengeText,
    
    } = req.body;
    try{
       console.log('피드 디비 등록 on');
       const feed = new Feed({
        registerId,
        uploadDate,
        challengeImg,
        challengeText,
    
       });
       await feed.save();
       res.send('인증 등록 성공');
    }catch (e){
        console.log(e.message);
        res.status(500).send('error on');
    }
    
});

module.exports = router;