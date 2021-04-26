const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const jwtMiddleware = require("./lib/jwtMiddleware");

const mainRouter = require("./routes/main");
const authRouter = require("./routes/auth");

const app = express();

//mongoDB
mongoose
  .connect(
    "mongodb+srv://iamnothalim:blockchain1!@wishnote.ccf0r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("몽고디비 오랜만이얌");
  })
  .catch((e) => {
    console.error(e);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(jwtMiddleware);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);
app.use("/auth", authRouter);

//proxyTest
//app.get('/api/hello',(req,res)=>{res.send("안녕 이건 프록시 테스트")});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
