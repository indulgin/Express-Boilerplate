
/*
 * Passport auth routes.
 */
var passport = require('passport');
var router = require('express').Router();

router.get('/google', passport.authenticate('google'));
router.get('/google/return', passport.authenticate('google'));
router.get('/google/return', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
router.get('/facebook', passport.authenticate('facebook', { scope: ['email', 'read_stream'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

module.exports = router;