//21.04.24 JE 챌린지 데이터 베이스 스키마 작성
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

//스키마 작성
const ChallengeSchema = new mongoose.Schema({
  //챌린지 인덱스 (자산, 건강, 역량, 관계, 취미분야 1~5) : asset, health, performance, relationship, hobby
  challengeIndex: {
    type: Number,
  },
  //작성자 아이디
  registerId: {
    type: String,
    required: true,
  },
  //카테고리
  category: {
    type: String,
    required: true,
  },
  //챌린지 제목
  challengeName: {
    type: String,
    required: true,
  },
  //인증 방법(text)
  howTo: {
    type: String,
    required: true,
  },
  //인증 횟수
  howMany: {
    type: Number,
    required: true,
  },
  //시작일
  startDate: {
    type: Date,
    required: true,
  },
  //종료일
  finishDate: {
    type: Date,
    required: true,
  },
  //참가비
  deposit: {
    type: Number,
    required: true,
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

//인덱스 auto increment 설정
ChallengeSchema.plugin(autoIncrement.plugin, {
  model: "challengeSchema", //모델명
  field: "challengeIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});

//스태틱 메서드 함수 추가
ChallengeSchema.statics.findByChallengeName = function (challengeName) {
  return this.findOne({ challengeName });
};

//스키마 만든 거 모델 내보내기
const Challenge = mongoose.model("Challenge", ChallengeSchema);
module.exports = Challenge;
