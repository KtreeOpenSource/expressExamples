require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var employeeRouter = require('./employee/router');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/employee', employeeRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    console.log(req.originalUrl)
    res.locals.message = err.message;
    console.error(err)
    res.locals.error = req.app?.get('env') === 'development' ? err : {};


    // render the error page
    res.status(err.status || 500);
    res.json({ 'error': err.status || 500 });
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
module.exports = app;
