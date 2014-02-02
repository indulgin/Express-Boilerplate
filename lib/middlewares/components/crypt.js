var crypto = require('crypto');
var secret = crypto.randomBytes(16).toString('base64');

exports.crypt = function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return callback(err);
        else {
            bcrypt.hash(password, salt, null, function(err, hash) {
                return callback(err, hash);
            });
        }
    });
};

exports.compare = function(password, userPassword, callback) {
    bcrypt.compare(password, userPassword, function(err, isPasswordMatch) {
        if (err) return callback(err);
        else return callback(null, isPasswordMatch);
    });
};

exports.crypt_sha = function(password, callback){
    var shasum = crypto.createHash('sha1');
    var salt = crypto.randomBytes(16).toString('base64');
    shasum.update(password+salt+secret);
    callback(null, shasum.digest('hex')+'-'+salt);
}

exports.compare_sha = function(password, userPassword, callback){
    shasum = crypto.createHash('sha1');
    var parts = userPassword.split('-');
    shasum.update(password+parts[1]+secret);
    callback(null, (shasum.digest('hex') == parts[0]));
}
