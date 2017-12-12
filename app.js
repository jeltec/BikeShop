/*eslint no-unused-vars: "off" */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var prod =  process.env.NODE_ENV === 'prod';

var routes = require('./routes/index');
var bikes = require('./routes/bikes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if (prod) {
        app.use(express.static(path.join(__dirname, 'dist')));
    } else {
        app.use(express.static(path.join(__dirname, 'build')));
    }
app.use("/public", express.static(__dirname + "/public"));

app.use('/', routes);

app.get('/bikes', bikes.findAll);
app.get('/bikes/:id', bikes.findOne);
app.post('/bikes', bikes.addBike);
app.put('/bikes/:id/users', bikes.incrementUsers);
app.delete('/bikes/:id', bikes.deleteBike);

app.get('*', bikes.home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

if (process.env.NODE_ENV !== 'test') {  
    app.use(logger('dev'));
}

module.exports = app;