const mainRouter = require("./routes/main");
const authRouter = require("./routes/auth");
const FeedRouter = require("./routes/feed");

app.use("/api", mainRouter);
app.use("/api/auth", authRouter);
app.use("/api/Feed", FeedRouter);

const express = require("express");
const router = express.Router();
const main = require("./main");
const auth = require("./auth");
const feed = require("./feed");

router.use("/", main);
router.use("/auth", auth);
router.use("/feed", feed);
