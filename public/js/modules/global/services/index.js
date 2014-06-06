/**
 * Created by f13 on 6/6/14.
 */
var module = angular.module('appName.global');

module.factory('User', function() {
    var user = window.user;
    return {
        user: function() {
            return user;
        },
        isSignedIn: function() {
            return !!user;
        }
    }
})