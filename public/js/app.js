/**
 * Created by f13 on 5/6/14.
 */
window.app = angular.module('appName', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'restangular', 'pascalprecht.translate', 'appName.global', 'appName.pages', 'appName.todo']);

//keep module declarations at one place here.
angular.module('appName.global', ['ui.bootstrap']);
angular.module('appName.pages', ['ui.bootstrap', 'appName.global']);
angular.module('appName.todo', ['ui.bootstrap', 'appName.global', 'restangular']);



//adding some common func here.
function safeApply(scope, fn) {
    (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
}
