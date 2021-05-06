const express = require("express");
const router = express.Router();
const Feed = require("../../models/Feed");
const FeedComment = require("../../models/FeedComment");
const Challenge = require("../../models/challenge");
const multer = require('multer');
const path = require('path');

//multer setting
const upload = multer({
  storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
          cb(null, 'uploads/feed');
      },
      // convert a file name
      filename: (req, file, cb) => {
          cb(null, new Date().valueOf() + path.extname(file.originalname));
      },
  }),
});
//21.04.25 피드 DB등록

///// 인증 피드 작성
router.post("/uploadFeed",upload.single('image'), async (req, res) => {
  console.log("req", req.body);
  console.log('id는',req.user.id);
  console.log('파일은!',req.file.filename);
  console.log("피드 등록 On");
  const { userId, description, title } = req.body;
  console.log(userId, description, title );
  try {
    const challengeInfo =await Challenge.findByChallengeName(title);
    console.log('요게 카테고리',challengeInfo.category);
    const feed = new Feed({
      userId,
      description,
      title,
      image:req.file.filename,
      category:challengeInfo.category,
    })
    await feed.save();
    res.json({success:true , msg:"피드 등록에 성공하셨습니다."});
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }
  //   try {
  
  // const feed = new Feed({
  //   registerId,
  //   challengeText,
  //   challengeName,s
  // });

  // const feed = new Feed();
  // console.log("feeasdasdd");

  // feed.userId = userId;
  // feed.description = description;
  // feed.title = title;
  // feed.category = category;
  // feed.image = image;

  // console.log(feed);

  // await feed
  //   .save()
  //   .then((feed) => {
  //     console.log("d");
  //     res.status(200).json({
  //       data: feed,
  //     });
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     res.status(500).json({
  //       message: e,
  //     });
  //   });
});

///// 피드 리스트 전체 보기
router.get("/getFeeds", function (req, res, next) {
  Feed.find()
    .then((feed) => {
      // console.log('read all 완료');
      res.status(200).json({
        data: feed,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// GET : /api/feed/feed
//아이디별 피드 리스트 보기
router.get("/", async function (req, res) {
  //토큰에 넣어놨당
  const userid = req.user.id;
  Feed.findOne({ userId: userid })
    .then((feed) => {
      if (!feed) return res.status(404).json({ message: "feed not found" });
      res.status(200).json({
        message: "read detail success",
        data: feed,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "혹시 여기니",
      });
    });
});

//피드 수정
router.put("/:post_id", async function (req, res, next) {
  const post_id = req.params.post_id;
  const { description, title } = req.body;

  try {
    var post = await Feed.findById(post_id);
    // console.log('durl',post)
    if (!post) return res.status(404).json({ message: "post not found" });
    post.description = description;
    post.title = title;

    const output = await post.save();
    // console.log('수정완료');
    res.status(200).json({
      message: "수정 성공",
      data: output,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

// 피드 상세보기
router.get("/:post_id", function (req, res, next) {
  const postId = req.params.post_id;
  console.log('tlqkf',postId)

  Feed.findOne({ _id: postId })
    .then((feed) => {
      if (!feed) return res.status(404).json({ message: "feed not found" });
      // console.log('read detail 완료');
      res.status(200).json({
        message: "read detail success",
        data: feed,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// 피드 삭제

router.delete("/:post_id", function (req, res, next) {
  const post_id = req.params.post_id;

  Feed.deleteOne({ _id: post_id })
    .then((output) => {
      if (output.n == 0)
        return res.status(404).json({ message: "feed not found" });
      // console.log('삭제 완료');
      res.status(200).json({
        // message:"삭제 성공"
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

// 댓글 작성

router.post("/feedComment/:postId", async (req, res) => {
  console.log("req", req.body);
  // console.log("댓글 등록 On");
  const { writer, content } = req.body;
  // console.log("피드 디비 댓글 등록 on");
  const postId = req.params.postId;

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

// 댓글 수정

router.put("/feedComment/:postId", async function (req, res, nxet) {
  const postId = req.params.postId;
  const { content } = req.body;

  try {
    var post = await FeedComment.findById(postId);
    console.log("여기", post);
    if (!post) return res.status(404).json({ message: "댓글 찾을수없음" });

    post.content = content;
    const output = await post.save();
    console.log("수정완료");
    res.status(200).json({
      message: "수정성공",
      data: output,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// var ffmpeg = require('fluent-ffmpeg');
// const {Feed} = require('../../models/Feed');

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         //파일 어디에 저장할지  uploads 파일안에 들어감
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}_${file.originalname}`)
//     },  //업로드 날짜와 파일 이름
//     fileFilter: (req, file, cb) => {
//         const ext = path.extname(file.originalname)
//         if (ext !== '.mp4' ) {
//             return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
//         }
//         cb(null, true)
//     }
// });

// const upload = multer({ storage: storage }).single("file")

// router.post("/uploadfiles", upload,(req, res) => {

//     //파일을 서버에저장
//     upload(req, res, err => {
//         if (err) {
//             return res.json({ success: false, err })
//         }
//         return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
//     })

// });
// router.post("/thumbnail", (req, res) => {

//     let thumbsFilePath ="";
//     let fileDuration ="";

//     ffmpeg.ffprobe(req.body.filePath, function(err, metadata){
//         console.dir(metadata);
//         console.log(metadata.format.duration);

//         fileDuration = metadata.format.duration;
//     })

//     ffmpeg(req.body.filePath)
//         .on('filenames', function (filenames) {
//             console.log('Will generate ' + filenames.join(', '))
//             thumbsFilePath = "uploads/thumbnails/" + filenames[0];
//         })
//         .on('end', function () {
//             console.log('Screenshots taken');
//             return res.json({ success: true, thumbsFilePath: thumbsFilePath, fileDuration: fileDuration})
//         })
//         .screenshots({
//             count: 3,
//             folder: 'uploads/thumbnails',
//             size:'320x240',
//             // %b input basename ( filename w/o extension )
//             filename:'thumbnail-%b.png'
//         });

// });

// router.get("/getFeeds", (req, res) => {

//     Feed.find()
//         .populate('user')
//         .exec((err, feeds) => {
//             if(err) return res.status(400).send(err);
//             res.status(200).json({ success: true, feeds })
//         })

// });

// router.post("/uploadFeed", (req, res) => {

//     const feed = new Feed(req.body)

//     feed.save((err, feed) => {
//         if(err) return res.status(400).json({ success: false, err })
//         return res.status(200).json({
//             success: true
//         })
//     })

// });

// router.post("/getFeed", (req, res) => {

//     Feed.findOne({ "_id" : req.body.feedId })
//     .populate('user')
//     .exec((err, feed) => {
//         if(err) return res.status(400).send(err);
//         res.status(200).json({ success: true, feed })
//     })
// });

// module.exports = router;
