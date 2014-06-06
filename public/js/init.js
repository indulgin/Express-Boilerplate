/**
 * Created by f13 on 5/6/14.
 */
window.bootstrap = function () {
    angular.bootstrap(document, ['appName']);
}

window.init = function () {
    window.bootstrap();
}

angular.element(document).ready(function () {
    if (window.location.hash == "#_=_") window.location.hash = "";
    window.init();
});
