const User = require("../../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res) {
  console.log("여긴 회원가입");
  //Request Body 검증
  // const schema = Joi.object().keys({
  //     username: Joi.string().alphanum().min(3).max(20).required(),
  //     password: Joi.string().required(),
  // });
  // const result = schema.validate(req.body);
  // if (result.error) {
  //     ctx.status = 400;
  //     ctx.body = result.error;
  //     return;
  // }
  const { nickname, password, name, id } = req.body;
  try {
    //id이 이미 존재하는지 확인
    const existsId = await User.findByUserId(id);
    console.log(existsId);
    if (existsId) {
      return res.json({success:false ,msg: "User ID already exists" });
    }
    //nickname이 이미 존재하는지 확인
    const existsNickname = await User.findByUserNickname(nickname);
    console.log(existsNickname);
    if (existsNickname) {
      return res.json({success:false ,msg: "User Nickname already exists" });
    }
    const user = new User({
      nickname,
      password,
      name,
      id,
      point:0,
    });
    await user.setPassword(password); //비번설정
    await user.save(); //데이터 베이스 저장

    req.body = user.serialize();

    res.json({ success: true, userId:user._id,msg:"회원가입이 완료되었습니다!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
