const User = require("../../models/user");
const express = require('express');
const router = express.Router();

router.post("/", async function(req, res) {
    console.log('여긴 회원가입');
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
    const { username, password } = req.body;
    try {
        //username이 이미 존재하는지 확인
        const exists = await User.findByUsername(username);
        if (exists) {
            return res
                .status(400)
                .json({errors:[{msg:"User already exists"}]});
        }
        const user = new User({
            username,
        });
        await user.setPassword(password); //비번설정
        await user.save(); //데이터 베이스 저장

        req.body = user.serialize();
        
        res.send("Success");

        // const token = user.generateToken();
        // ctx.cookies.set("access_token", token, {
        //     maxAge: 1000 * 60 * 60 * 24 * 7, //7일
        //     httpOnly: true,
        // });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Server Error");
    }
} );

module.exports = router;