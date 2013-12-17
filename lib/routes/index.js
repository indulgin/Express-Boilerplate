var app = require('../server');
var passport = require('passport')
var routes = require('./handlers');

//define routes here
app.get('/', routes.index);

// passport auth routes
app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/return', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'read_stream'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

// logout route
app.get('/logout', routes.logout);
