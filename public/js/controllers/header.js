/**
 * Created by f13 on 5/6/14.
 */
function NavBarCtrl($scope) {
    $scope.isCollapsed = true;
    $scope.toggleClick = function() {
        this.isCollapsed = !this.isCollapsed;
    }
}