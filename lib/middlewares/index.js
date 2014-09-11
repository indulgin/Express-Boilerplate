/**
 * Created by f13 on 17/12/13.
 */
var app = require('../server'),
    path = require('path'),
    express = require('express'),
    passport = require('./components/passport'),
    config = require('./../config'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

app.use(favicon(path.join(ROOT_DIR, '/public/img/favicon.ico')));
app.use(express.static(path.join(ROOT_DIR, 'public')));
app.use(morgan('dev')); 					// log every request to the console
app.use(cookieParser('indulgin-secret'));
// pull information from html in POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride()); 					// simulate DELETE and PUT
app.use(session(require('./components/sessionStore')));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./components/user'));
app.use(require('less-middleware')(path.join(ROOT_DIR, 'public')));

app.use(function (err, req, res, next) {
    throw err;
    console.error(err.stack);
    //res.render('error', { title: 'Error', 'req': req, 'error': err, 'data': {} });
});

// development only
if ('development' === app.get('env')) {
    app.use(errorHandler());
}
