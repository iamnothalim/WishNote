const User = require("../../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async function (req, res) {
  const charge = req.body.dataToSubmit;
  const id = req.body.id.id;
  try {
    const user = await User.findByUserId(id);
    const userPoint = user.point;
    console.log(userPoint);

    await User.updateOne({ id: id }, { $set: { point: userPoint + charge } });
    res.json({ point: userPoint + charge, id: id });
    const updateUser = await User.findByUsername(id);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
