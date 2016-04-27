var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')

var app = express();

var controller = require('./controllers');

//show log on dev environment 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

controller.init(app);

//Use middleware to serve static files
app.use(serveStatic('public', { 'index': ['index.html', 'index.htm'] }));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(3000);

module.exports = app;
