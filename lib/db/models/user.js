var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	id			:String,
	provider	:String,
	uid			:String,
	username	:String,
	password	:String,
	firstName	:String,
	lastName	:String,
	email 		:String,
	bio			:String,
	lastLogin	:Date,
	dateJoined	:Date,
});

User.statics.findOrCreate = function( provider, identifier, profile, done ){
	//console.log( profile );

	var User = this.model('User');
	var email = false;
	if( profile.emails ){
		email = profile.emails[ 0 ].value;
	}

	User.findOne( { 'email': email }, function( err, olduser ){
		if( err ){ throw err; }

		if( olduser && olduser._id ){
			console.log('User: ' + olduser.firstname + ' ' + olduser.lastname + ' found and logged in! ' + provider);
			done(null, olduser);
		}
		else {
			User.findOne({ 'uid': identifier, 'provider': profile }, function(err, olduser) {
				if( err ){ throw err; }

				if( olduser && olduser._id ){
					console.log('User: ' + olduser.firstname + ' ' + olduser.lastname + ' found and logged in! ' + provider);
					done(null, olduser);
				} else {
					var newuser = new User();
					newuser.provider = provider;
					newuser.uid = identifier;
					newuser.username = profile.username;
					newuser.firstName = profile.name.givenName;
					newuser.lastName = profile.name.familyName;
					newuser.email = email;
					newuser.dateJoined = new Date();

					newuser.save(function(err) {
						if(err) { throw err; }
						console.log('New user: ' + newuser.firstname + ' ' + newuser.lastname + ' created and logged in! ' + provider);
						done(null, newuser);
					});
				}
			});
		}
	} );
}

mongoose.model( 'User', User );
module.exports = mongoose.model( 'User' );
