/**
 * Created by f13 on 17/12/13.
 */
var app = require('../server');
var path = require('path');
var express = require('express');
var passport = require('./components/passport');
var config = require('./../config');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(favicon(path.join(ROOT_DIR, '/public/img/favicon.ico')));
app.use(express.static(path.join(ROOT_DIR, 'public')));
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT
app.use(cookieParser('indulgin-secret'));
app.use(session(require('./components/sessionStore')));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('less-middleware')(path.join(ROOT_DIR, 'public')));

app.use(function (err, req, res, next) {
    console.error(err.stack);
    //res.render('error', { title: 'Error', 'req': req, 'error': err, 'data': {} });
});

// development only
if ('development' === app.get('env')) {
    app.use(errorHandler());
}
