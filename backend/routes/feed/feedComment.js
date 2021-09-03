
const express = require("express");
const router = express.Router();
const FeedComment = require("../../models/FeedComment");

router.post("/saveFeedComment", (req, res) => {
  const { content, userId, postId, createdAt } = req.body;
  const feedComment = new FeedComment({
    content,
    userId,
    postId,
    createdAt,
  });

  feedComment.save((err, feedComment) => {
    if (err) {
      return res.json({ success: false, err });
    }
    FeedComment.find({ _id: feedComment._id })
      .populate("postId")
      .exec((err, result) => {
        if (err) {
          return res.json({ success: false, err });
        }
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post("/getFeedComments", (req, res) => {
  FeedComment.find({ postId: req.body.feedId })
    .populate("userId")
    .exec((err, feedComments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, feedComments });
    });
});

module.exports = router;
