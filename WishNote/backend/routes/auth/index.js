// import Router from ""
// import * as authCtrl from "./auth.ctrl";

// const auth = new Router();

// auth.post("/register", authCtrl.register);
// auth.post("/login", authCtrl.login);
// auth.get("/check", authCtrl.check);
// auth.post("/logout", authCtrl.logout);

// export default auth;

const express = require("express");
const router = express.Router();
const login = require("./login");
const register = require("./register");
const logout = require("./logout");

router.use("/login", login);
router.use("/logout", logout);
router.use("/register", register);

module.exports = router;
