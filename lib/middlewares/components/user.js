/**
 * Created by f13 on 8/6/14.
 */
var path = require('path');
var db = require(path.join(ROOT_DIR, 'lib/db'));
var User = db.User;

module.exports = function(req, res, next) {
    if(req.user && req.user._id) {
        User.getUser(req.user._id, function(err, user) {
            if(err) console.error(err);
            if(user) {
                req.user = user;
            }

            next();
        })
    }
    else
        next();
}