var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var mainRouter = require('./routes/main');
var authRouter = require('./routes/auth');

var app = express();


//mongoDB
mongoose
  .connect('mongodb://132.226.18.214:27017/wishnote', { 
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("몽고디비 오랜만이얌");
  })
  .catch((e) => {
    console.error(e);
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
