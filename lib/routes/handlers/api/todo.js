/**
 * Created by f13 on 7/6/14.
 */
var path = require('path');
var async = require('async');
var Todo = require(path.join(ROOT_DIR, 'lib/db')).Todo;

module.exports.getAll = function(req, res, next) {
    console.log("at todo get all ", req.user);
    res.json(req.user);
}

module.exports.createTodo = function(req, res, next) {

    var user = req.user;
    async.waterfall([
        function(done) {
            Todo.createTodo("test todo", req.user, function(err, todo) {
                if(err) return done(err);
                return done(null, todo);
            });
        },
        function(todo, done) {
            user.addTodo(todo, function(err, todo) {
                if(err) return done(err);
                return done(null, todo);
            })
        }
    ], function(err, todo) {
        if(err) console.error(err);
        res.json(todo);
    });
}