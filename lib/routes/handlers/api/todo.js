/**
 * Created by f13 on 7/6/14.
 */
var path = require('path');
var async = require('async');
var Todo = require(path.join(ROOT_DIR, 'lib/db')).Todo;

module.exports.getAll = function(req, res, next) {
    if(req.user && req.user._id == req.params.uid) {
        req.user.getAllTodos(function(err, todos) {
            if(err) {console.error(err); throw err;}
            res.json(todos);
        })
    }
    else {
        res.json(403, {code: 403, message: "Forbidden"});
    }
}

module.exports.createTodo = function(req, res, next) {
    var todo = req.body.todo;
    var user = req.user;

    if(todo && user && user._id == req.params.uid) {
        async.waterfall([
            function(done) {
                Todo.createTodo(todo, user, function(err, todo) {
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
    else {
        if(user)
            res.json(400, {code: 400, message: "Bad Request"});
        else
            res.json(403, {code: 403, message: "Unauthenticated user"});
    }

}