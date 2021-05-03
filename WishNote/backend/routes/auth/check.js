const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async function (req, res, next) {
  console.log("여긴 check");
  console.log('asdas',req.user)
  if (!req.user) {
    res.json({ id: null });
    return;
  }else {
    try {
      const userdata= await User.findByUserId(req.user.id);
      
        const user ={
          nickname:userdata.nickname,
          name:userdata.name,
          id:userdata.id,
          point:userdata.point
        }
        console.log(user);
        res.json(user);
      
    } catch (e) {
      console.log(e.message);
      res.status(500).send("Server Error");
    }
  }
});
 //const user = req.user;
module.exports = router;
