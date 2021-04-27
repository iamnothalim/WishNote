//21.04.26  챌린지 인증 피드 데이터 베이스 스키마 작성
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const feedCommentSchema = new mongoose.Schema({
  writer :{
    type:String,
  },
  postId:{
    type:String,
  },
  // responseTo:{
  //   type:String,
  // },
  content:{
    type:String,
    required:true,
  },
  commentTime:{
    type:Date,
    default: Date.now(),
  }
});

feedCommentSchema.plugin(autoIncrement.plugin, {
  model: "feedComment", //모델명
  field: "feedIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});

const feedComment = mongoose.model("feedComment", feedCommentSchema);
module.exports = feedComment;
 