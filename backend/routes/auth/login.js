const User = require("../../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res) {
  const { id, password } = req.body;
  //둘중 하나라도 없으면 에러
  if (!id || !password) {
    return res.status(400).json({ errors: [{ msg: "User not exists" }] });
  }
  try {
    const user = await User.findByUserId(id);
    //계정이 없으면 에러
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "User not exists" }] });
    }
    try {
      const user = await User.findByUserId(id);
      //계정이 없으면 에러
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "User not exists" }] });
      }
      const valid = await user.checkPassword(password);
      // 잘못된 비번이라면
      if (!valid) {
        return res.status(400).json({ errors: [{ msg: "Password wrong" }] });
      }
      req.body = user.serialize();
      const token = user.generateToken();
      res
        .cookie("access_token", token, {
          maxAge: 1000 * 60 * 60 * 24 * 7, //7일
          httpOnly: true,
        })
        .json({ loginSuccess: true, user: id });
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Server Error");
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
