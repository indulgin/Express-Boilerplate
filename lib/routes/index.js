var app = require('../server');

//define routes here
app.use('/', require('./handlers'));

// passport auth routes
app.use('/auth', require('./handlers/auth'));