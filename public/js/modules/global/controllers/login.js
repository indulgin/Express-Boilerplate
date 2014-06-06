/**
 * Created by f13 on 6/6/14.
 */
var module = angular.module('appName.global');

module.controller('LoginModalCtrl', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function(size) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'LoginModalInstanceCtrl',
            size: size,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(slectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at:' + new Date());
        });
    }
});

module.controller('LoginModalInstanceCtrl', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
    }
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    }
});