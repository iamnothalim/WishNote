//21.04.26  챌린지 인증 피드 데이터 베이스 스키마 작성
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const feedCommentSchema = new mongoose.Schema({
  userId :{
    type:String,
  },
  postId:{
    type:String,
  },
  responseTo:{
    type:String,
  },
  content:{
    type:String,
    required:true,
  }
}, { timestamps: true });

feedCommentSchema.plugin(autoIncrement.plugin, {
  model: "FeedComment", //모델명
  field: "feedIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});

const FeedComment = mongoose.model("FeedComment", feedCommentSchema);
module.exports = FeedComment;


