// //21.04.26  챌린지 인증 피드 데이터 베이스 스키마 작성
// const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
// autoIncrement.initialize(mongoose.connection);

// const likeSchema = new mongoose.Schema({
//     userId:{
//         type:String,
//     },
//     postId:{
//         type:String,
//     },
    
// });

// likeSchema.plugin(autoIncrement.plugin, {
//   model: "feedComment", //모델명
//   field: "feedIndex", //자동증가할 db컬럼명
//   startAt: 0, //시작
//   increment: 1, // 증가
// });

// const like = mongoose.model("like", likeSchema);
// module.exports = like;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   commentId: {
       type: Schema.Types.ObjectId,
       ref: 'Comment'
   },
   feedId: {
       type: Schema.Types.ObjectId,
       ref: 'Feed'
   }

}, { timestamps: true })


const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }

