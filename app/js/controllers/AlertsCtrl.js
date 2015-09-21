/**
 * Alerts Controller
 */

angular
    .module('Collate')
    .controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [
    // {
    //     type: 'success',
    //     msg: 'Now find all cab services under one roof!'
    // }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}