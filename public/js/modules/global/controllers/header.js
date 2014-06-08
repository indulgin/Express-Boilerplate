/**
 * Created by f13 on 5/6/14.
 */
var module = angular.module('appName.global');

module.controller('NavBarCtrl', ['$scope', function (scope) {
    scope.isCollapsed = true;
    scope.toggleClick = function () {
        this.isCollapsed = !this.isCollapsed;
    }
}]);