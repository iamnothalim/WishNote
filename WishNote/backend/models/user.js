//import mongoose, { Schema } from "mongoose";
//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: String,
  hashedPassword: String,
});

//setPassword,checkPassword->인스턴스 메서드
//모델을 통해 만든 문서 인스턴스에서 사용할수 있는 함수

//비밀번호를 파라미터로 받아 계정의 hashedPassword 값을 설정
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};
//파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
    const token = jwt.sign(
        //첫번째 파라미터에는 토큰안에 집어 넣고 싶은 데이터를 넣는다.
        {
            _id: this.id,
            username: this.username,
        },
        'secret', //두번째 파라미터에는 JWT암호
        {
            expiresIn: "7d", //7일동안만
        }
    );
    return token;
};
//스태틱 메서드
//모델에서 바로 사용할수 있는 함수

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
