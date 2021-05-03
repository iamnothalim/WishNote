const User = require("../../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res) {
  console.log("여긴 충전소");
  const charge = req.body.dataToSubmit;
  const id = req.body.id.id;
  console.log("이게 차지", charge);
  console.log("이게 id", id);
  try {
    const user = await User.findByUsername(id);
    const userPoint = user.point;
    console.log(userPoint);

    await User.updateOne({ id: id }, { $set: { point: userPoint + charge } });
    res.json({ point: userPoint + charge, id: id });
    const updateUser = await User.findByUsername(id);
    console.log("업데이트 된 유저", updateUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
