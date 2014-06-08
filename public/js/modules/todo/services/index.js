/**
 * Created by f13 on 8/6/14.
 */
var module = angular.module('appName.todo');

module.service('Todo', function(Restangular, User) {
    var UserAcc = Restangular.one('user', User.user()._id);
    var Todo = UserAcc.one('todo');

    var todoData = null;

    //if callback is set and refresh is true do a call, else just return from cache.
    this.getTodo = function(done, refresh) {
        if(refresh) {
            Todo.getList().then(function (todos) {
                if(done) done(null, todos);
            }, function (res) {
                if(done) done(new Error(res));
            });
        }
        else {
            if(done) return done(null, todoData);
            else return todoData;
        }
    }

    this.createTodo = function(todoContent, done) {
        console.log("new todo : "+todoContent);
        UserAcc.post('todo', {todo: todoContent}).then(function(res) {
            done(null, res);
        }, function(res) {
            done(new Error(res));
        })
    }
});