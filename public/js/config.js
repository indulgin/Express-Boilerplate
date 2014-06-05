/**
 * Created by f13 on 5/6/14.
 */
//do provider configuration here.

//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/index.html' })
        .otherwise({redirectTo: '/'});
}]);
