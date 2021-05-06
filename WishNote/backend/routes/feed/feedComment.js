// const express = require('express');
// const router = express.Router();
// const  FeedComment  = require("../../models/FeedComment");

// // const { auth } = require("../middleware/auth");

// //=================================
// //             Subscribe
// //=================================


// router.post("/saveFeedComment", (req, res) => {

//     const feedComment = new FeedComment(req.body)

//     feedComment.save((err, feedComment) => {
//         if (err) return res.json({ success: false, err })

//         FeedComment.find({ '_id': feedComment._id })
//             .populate('userId')
//             .exec((err, result) => {
//                 if (err) return res.json({ success: false, err })
//                 return res.status(200).json({ success: true, result })
//             })
//     })
// })

// router.post("/getFeedComments", (req, res) => {

//     FeedComment.find({ "postId": req.body.feedId })
//         .populate('userId')
//         .exec((err, feedComments) => {
//             if (err) return res.status(400).send(err)
//             res.status(200).json({ success: true, feedComments })
//         })

// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const  FeedComment  = require("../../models/FeedComment");

// const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================


router.post("/saveFeedComment", (req, res) => {
    // console.log(req.body);
    const {content,userId,postId,createdAt}=req.body;
    const feedComment = new FeedComment({
        content,
        userId,
        postId,
        createdAt,
    })

    feedComment.save((err, feedComment) => {
        if (err){
            console.log('이건 이거다잉ㅇ')
            return res.json({ success: false, err })
        } 
        // console.log('요건 뭘까용',feedComment._id.toString())
        FeedComment.find({ '_id': feedComment._id })
            .populate('postId')
            .exec((err, result) => {
                if (err){
                    // console.log(err)
                    return res.json({ success: false, err })
                } 
                return res.status(200).json({ success: true, result })
            })
    })

})

router.post("/getFeedComments", (req, res) => {

    FeedComment.find({ "postId": req.body.feedId })
        .populate('userId')
        .exec((err, feedComments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, feedComments })
        })

});




module.exports = router;
