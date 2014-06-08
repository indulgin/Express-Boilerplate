/**
 * Created by f13 on 5/6/14.
 */
var module = angular.module('appName.pages');

module.controller('indexPageCtrl', ['$scope', 'Todo', function (scope, todo) {
    scope.todos = null;
    scope.newTodo = null;

    scope.getTodo = function () {
        console.log("button clicked");
        todo.getTodo(function(err, todos) {
            if(err) return console.error(err);
            safeApply(scope, function() {
                scope.todos = todos;
            });
        }, true);
    }

    scope.addTodo = function() {
        console.log("submit to be done");
        todo.createTodo(scope.newTodo, function(err, todo) {
            if(err) return console.error(err);
            console.log(todo);
            safeApply(scope, function() {
                scope.todos.push(todo);
            })
        })
    }

    scope.getTodo();
}]);