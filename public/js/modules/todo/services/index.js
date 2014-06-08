/**
 * Created by f13 on 8/6/14.
 */
var module = angular.module('appName.todo');

module.service('Todo', function(Restangular, User) {
    var UserAcc = Restangular.one('user', User.user()._id);
    var Todo = UserAcc.one('todo');
    console.log(User.user());
    //var Todo = Restangular.one('todo');

    this.getTodo = function() {
        Todo.get().then(function(todos) {
            console.log(todos);
        }, function(res) {
            //error
            console.log("error" + res);
        });
    }
});