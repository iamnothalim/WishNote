const mongoose = require("mongoose");

const ChallengeStatusSchema = new mongoose.Schema({
  userid: String,
  creator: String,
  challenge_name: String,
  challenge_state: Number,
  category: String,
});

//스태틱 메서드 함수 추가
ChallengeStatusSchema.statics.findByChallengeName = function (challenge_name) {
  return this.findOne({ challenge_name });
};
ChallengeStatusSchema.statics.findByUser = function (userid) {
  return this.find({ userid });
  //return this.find({userid:userid});
};

//스키마 만든 거 모델 내보내기
const ChallengeStatus = mongoose.model(
  "ChallengeStatus",
  ChallengeStatusSchema
);
module.exports = ChallengeStatus;
