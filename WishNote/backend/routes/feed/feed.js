const express = require("express");
const router = express.Router();
const Feed = require("../../models/feed");
const FeedComment = require('../../models/feedComment')



//21.04.25 피드 DB등록


///// 인증 피드 작성
router.post("/", async (req, res) => {
  console.log("req", req.body);
  console.log("피드 등록 On");
  const { registerId, challengeText, challengeName , challengeImg,category} = req.body;
  //   try {
  console.log("피드 디비 등록 on");
  // const feed = new Feed({
  //   registerId,
  //   challengeText,
  //   challengeName,
  // });

  const feed = new Feed();
//   console.log("feed");

  feed.registerId = registerId;
  feed.challengeText = challengeText;
  feed.challengeName = challengeName;
  feed.challengeImg = challengeImg;
  feed.category = category;

  await feed
    .save()
    .then((feed) => {
    //   console.log("d");
      res.status(200).json({
        data: feed,
      });
    })
    .catch((e) => {
      res.status(500).json({
        message: e,
      });
    });
  // res.send("첼린지 인증 피드 등록 성공");
  //   } catch (e) {
  //     console.log(e.message);
  //     res.status(500).send("error on");
  //   }
});

///// 피드 리스트 전체 보기
router.get ('/',function(req,res,next){
  Feed
  .find()
  .then((feed) =>{
      // console.log('read all 완료');
      res.status(200).json({
          data:feed
      });
  })
  .catch(err =>{
      res.status(500).json({
          message:err
      });
  });

});

//피드 수정
router.put('/:post_id', async function(req,res,next){
  const post_id = req.params.post_id;
  const {challengeText,challengeName} = req.body;
  
  try{
    var post = await Feed.findById(post_id);
    // console.log('durl',post)
    if(!post) return res.status(404).json({message:"post not found"});
    post.challengeText = challengeText;
    post.challengeName = challengeName;

    const output = await post.save();
    // console.log('수정완료');
    res.status(200).json({
      message:"수정 성공",
      data:output
      
    });
  }catch (err){
    res.status(500).json({
      message: err
    });
  }
});


// 피드 상세보기
router.get("/:post_id", function(req,res,next){
  const postId =req.params.post_id;

  Feed
  .findOne({ _id : postId})
  .then((feed) =>{
    if (!feed) return res.status(404).json({message:"feed not found"})
    // console.log('read detail 완료');
    res.status(200).json({
      message : 'read detail success',
      data : feed
      
    });
  })
  .catch(err =>{
    res.status(500).json({
      message : err
    });
  });
});

// 피드 삭제 

router.delete("/:post_id", function(req,res,next){
  const post_id = req.params.post_id;

  Feed
  .deleteOne({_id:post_id})
  .then(output =>{
    if(output.n == 0)
      return res.status(404).json({message: "feed not found"});
    // console.log('삭제 완료');
    res.status(200).json({
      // message:"삭제 성공"
    });
  })
  .catch(err =>{
    res.status(500).json({
      message: err
    });
  });
});

// 댓글 작성


router.post("/feedComment/:postId", async (req, res) => {
  console.log("req", req.body);
  // console.log("댓글 등록 On");
  const { writer,content} = req.body;
  // console.log("피드 디비 댓글 등록 on");
  const postId =req.params.postId;
  
  const feedComment = new FeedComment();

  feedComment.writer = writer;
  feedComment.postId = postId;
  feedComment.content = content;

  await feedComment
    .save()
    .then((feedComment) => {
    //   console.log("d");
      res.status(200).json({
        data: feedComment,
      });
    })
    .catch((e) => {
      res.status(500).json({
        message: e,
      });
    });
  
});

//댓글 수정

// router.put("/feedComment/:postId", async function(req,res,nxet){
//   const postId = req.params.postId;
//   const { content } = req.body;

//   try{
//     var post = await FeedComment.findById(postId);
//     console.log('여기', post)
//     if(!post) return res.status(404).json({message:"댓글 찾을수없음"});

//     post.content =content;
//     const output = await post.save();
//     console.log('수정완료');
//     res.status(200).json({
//       message:"수정성공",
//       data:output
//     });
//   }catch (err){
//     res.status(500).json({
//       message:err
//     });
//   }
// });





module.exports = router;
