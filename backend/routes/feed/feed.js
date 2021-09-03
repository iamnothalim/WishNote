const express = require("express");
const router = express.Router();
const Feed = require("../../models/Feed");
const FeedComment = require("../../models/FeedComment");
const Challenge = require("../../models/challenge");
const multer = require("multer");
const path = require("path");

//multer setting
const upload = multer({
  storage: multer.diskStorage({
    // set a localstorage destination
    destination: (req, file, cb) => {
      cb(null, "uploads/feed");
    },
    // convert a file name
    filename: (req, file, cb) => {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});
//21.04.25 피드 DB등록

///// 인증 피드 작성
router.post("/uploadFeed", upload.single("image"), async (req, res) => {
  const { userId, description, title } = req.body;
  console.log(userId, description, title);
  try {
    const challengeInfo = await Challenge.findByChallengeName(title);
    console.log("요게 카테고리", challengeInfo.category);
    const feed = new Feed({
      userId,
      description,
      title,
      image: req.file.filename,
      category: challengeInfo.category,
    });
    await feed.save();
    res.json({ success: true, msg: "피드 등록에 성공하셨습니다." });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("server error");
  }

  const feed = new Feed();

  feed.userId = userId;
  feed.description = description;
  feed.title = title;
  feed.category = category;
  feed.image = image;

  console.log(feed);

  await feed
    .save()
    .then((feed) => {
      console.log("d");
      res.status(200).json({
        data: feed,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        message: e,
      });
    });
});

///// 피드 리스트 전체 보기
router.get("/getFeeds", function (req, res, next) {
  Feed.find()
    .sort({ createdAt: "-1" })
    .then((feed) => {
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
        message: "error",
      });
    });
});

//피드 수정
router.put("/:post_id", async function (req, res, next) {
  const post_id = req.params.post_id;
  const { description, title } = req.body;

  try {
    var post = await Feed.findById(post_id);
    if (!post) return res.status(404).json({ message: "post not found" });
    post.description = description;
    post.title = title;

    const output = await post.save();
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
router.get("/:_id", function (req, res, next) {
  const postId = req.params._id;

  Feed.findOne({ _id: postId })
    .then((feed) => {
      if (!feed) return res.status(404).json({ message: "feed not found" });
      FeedComment.find({ postId: postId })
        .sort({ updatedAt: "-1" })
        .then((comment) => {
          res.status(200).json({
            message: "read detail success",
            data: feed,
            comment: comment,
          });
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
      res.status(200).json({
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
  const { userId, content } = req.body;
  // console.log("피드 디비 댓글 등록 on");
  const postId = req.params.postId;

  const feedComment = new FeedComment();

  feedComment.userId = userId;
  feedComment.postId = postId;
  feedComment.content = content;

  await feedComment
    .save()
    .then((feedComment) => {
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
