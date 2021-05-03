const express = require('express');
const router = express.Router();
const { FeedComment } = require("../../models/FeedComment");

// const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================


router.post("/saveFeedComment", (req, res) => {

    const feedComment = new FeedComment(req.body)

    feedComment.save((err, feedComment) => {
        if (err) return res.json({ success: false, err })

        FeedComment.find({ '_id': feedComment._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })

})

router.post("/getFeedComments", (req, res) => {

    FeedComment.find({ "postId": req.body.videoId })
        .populate('writer')
        .exec((err, feedComments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, feedComments })
        })

});




module.exports = router;
