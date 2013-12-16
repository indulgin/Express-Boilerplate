var app = require('../server');
var routes = require('./handlers');

//define routes here
app.get('/', routes.index);