//21.04.24 JE 챌린지 데이터 베이스 스키마 작성
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const challengeSchema = new mongoose.Schema({
  //챌린지 인덱스 (자산, 건강, 역량, 관계, 취미분야 1~5)
  challengeIndex: {
    type: Number,
  },
  //작성자 아이디
  registerId: {
    type: String,
  },
  //카테고리
  category: {
    type: String,
  },
  //챌린지 제목
  challengeName: {
    type: String,
  },
  //인증 방법(text)
  howTo: {
    type: String,
  },
  //인증 횟수
  howMany: {
    type: Number,
  },
  //시작일
  startDate: {
    type: Date,
  },
  //종료일
  finishDate: {
    type: Date,
  },
  //참가비
  deposit: {
    type: Number,
  },
  //조회수
  views: {
    type: Number,
  },
  //참가자 수
  partNum: {
    type: Number,
  },
});

challengeSchema.plugin(autoIncrement.plugin, {
  model: "challengeSchema", //모델명
  field: "challengeIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = { Challenge };
