/**
 * Created by f13 on 17/12/13.
 */
var app = require('../server');
var path = require('path');
var express = require('express');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('indulgin-secret'));
app.use(express.session());

require('./components/passport');

app.use(app.router);
app.use(require('less-middleware')({ src: path.join(ROOT_DIR, 'public') }));
app.use(express.static(path.join(ROOT_DIR, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
