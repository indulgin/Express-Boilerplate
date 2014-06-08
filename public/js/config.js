/**
 * Created by f13 on 5/6/14.
 */
//do provider configuration here.

//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'view/index.html', controller: 'indexPageCtrl'})
        .otherwise({redirectTo: '/'});
}])
.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
});
