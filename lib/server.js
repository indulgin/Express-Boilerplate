/**
 * Created by f13 on 16/12/13.
 */
var express = require('express');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(ROOT_DIR, 'views'));
app.set('view engine', 'jade');

module.exports = app;