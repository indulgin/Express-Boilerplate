/**
 * Created by f13 on 5/6/14.
 */
var module = angular.module('appName.pages');

module.controller('indexPageCtrl', ['$scope', 'Todo', function (scope, todo) {
    scope.getTodo = function () {
        console.log("button clicked");
        todo.getTodo();
    }
}]);