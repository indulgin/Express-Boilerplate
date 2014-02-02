/**
 * Created by f13 on 17/12/13.
 */
var app = require('../server');
var path = require('path');
var express = require('express');
var passport = require('./components/passport');
var config = require('./../config');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('indulgin-secret'));
app.use(express.session(require('./components/sessionStore')));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(ROOT_DIR, 'public') }));
app.use(express.static(path.join(ROOT_DIR, 'public')));
app.use(function(err, req, res, next){
    console.error(err.stack);

    //res.render('error', { title: 'Error', 'req': req, 'error': err, 'data': {} });
});
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
