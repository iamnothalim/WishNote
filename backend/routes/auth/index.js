
const express = require("express");
const router = express.Router();
const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const check = require("./check");
const charge = require("./charge");

router.use("/login", login);
router.use("/logout", logout);
router.use("/register", register);
router.use("/check", check);
router.use("/charge", charge);

module.exports = router;
