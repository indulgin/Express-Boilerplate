var app = require('../../server');
var config = require('../../config');
var models = require('../../db');

var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// passport serialize setup
passport.serializeUser(function(user, done) {
	done(null, user._id);
});

// passport deserialize setup
passport.deserializeUser(function(id, done) {
	models.User.findById(id, function(err, user) {
		done(err, user);
	});
});


// passport google setup
passport.use(new GoogleStrategy({
		returnURL: config.url + '/auth/google/return',
		realm: config.url + '/'
	},

	function(identifier, profile, done) {
		/**
		*	asyncronous verification, for effect
		*	http://stackoverflow.com/questions/11155108/how-to-deal-with-async-findorcreate-method-for-passport-and-mongoose
		*/
		process.nextTick(function(){
			models.User.findOrCreate( 'google', identifier, profile, done );
		});
	}
));

// passport facebook setup
passport.use(new FacebookStrategy({
		// keys for local development app
		clientID: '181979948663237',
		clientSecret: '98ccbe596d2d12ad5765ae977dd9da7a',
		callbackURL: config.url + "/auth/facebook/callback"
	},
	
	function(accessToken, refreshToken, profile, done) {
		process.nextTick(function(){
	  		models.User.findOrCreate( 'facebook', accessToken, profile, done );
	  	});
	}
));

module.exports = passport;
