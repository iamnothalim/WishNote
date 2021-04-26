//import jwt from "jsonwebtoken";
//import User from "../models/user";
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies.access_token;
  //console.log('이게 어세스 토큰: ',req.cookies.access_token);
  if (!token) return next(); //토큰 없음
  try {
    console.log("middleware try안쪽");
    const decoded = jwt.verify(token, "secret");
    req.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    console.log(req.user);
    //토큰의 남은 유효기간이 3.5일 미만이면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      res.cookie("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }
    //console.log(decoded);
    return next();
  } catch (e) {
    return next(); //토큰 검증 실패
  }
};

//export default jwtMiddleware;
module.exports = jwtMiddleware;
