var app = require('../server');
var routes = require('./handlers');

app.get('/', routes.index);