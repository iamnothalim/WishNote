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
    //username이 이미 존재하는지 확인
    const exists = await User.findByUsername(nickname);
    if (exists) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
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

    res.json({ success: true, userId:user._id });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
