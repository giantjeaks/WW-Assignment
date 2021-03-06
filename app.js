var mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.Promise = global.Promise
mongoose.connect('mongodb://sa:Alancx1475963@alancx-shard-00-00-na9pp.gcp.mongodb.net:27017,alancx-shard-00-01-na9pp.gcp.mongodb.net:27017,alancx-shard-00-02-na9pp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Alancx-shard-0&authSource=admin&retryWrites=true&w=majority',
 {useNewUrlParser: true});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
