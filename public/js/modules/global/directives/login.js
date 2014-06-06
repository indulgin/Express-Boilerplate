/**
 * Created by f13 on 6/6/14.
 */
var module = angular.module('appName.global');

module.directive('login', ['User', function(User) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/view/partials/components/login.html",
        link: function(scope, element, attrs) {
            scope.userSignedIn = User.isSignedIn;
        }
    }
}])

module.directive('logout', ['User', function(User) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/view/partials/components/logout.html",
        link: function(scope, element, attrs) {
            scope.userSignedIn = User.isSignedIn;
        }
    }
}])