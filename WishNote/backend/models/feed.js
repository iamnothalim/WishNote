//21.04.26  챌린지 인증 피드 데이터 베이스 스키마 작성
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const feedSchema = new mongoose.Schema({
  //인증 피드 인덱스
  feedIndex: {
    type: Number,
  },
  //작성자 아이디
  registerId: {
    type: String,
  },
  //업로드 날짜
  uploadDate: {
    type: Date,
    default: Date.now(),
  },
  //카테고리
  category: {
    type: String,
    required:true,
  },
  //인증 사진
  challengeImg:{
      type:String,
      required: true,
  },
  //인증내용
  challengeText: {
    type: String,
    max: 50,
  },
  //챌린지 이름
  challengeName: {
    type: String,
    required: true,
  },
  //좋아요
  likes: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
  },
  //   //'인증 글'의 고유값
  //   noticeToken:{
  //      type:String,
  //   }
});

feedSchema.plugin(autoIncrement.plugin, {
  model: "feedSchema", //모델명
  field: "feedIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});

const Feed = mongoose.model("Feed", feedSchema);
module.exports = Feed;
