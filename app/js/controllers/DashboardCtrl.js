/**
 * Dashboard Controller
 */

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$controller', 'GeoLocationService', 'ETAService', DashboardCtrl]);

function DashboardCtrl($scope, $http, $controller, GeoLocationService, ETAService) {
    $scope.oExpectedTimes = {};

    $scope.getExpectedTimes = function() {

    	// get location of the user first, then request ETAs for cab services
    	GeoLocationService.currentLocation().then(function(currentLocation){

    		// once we have location, we request for ETA for services
    		ETAService.uberETA(currentLocation).then(function(data) {
                    $scope.oExpectedTimes.uber = [];
                    $scope.oExpectedTimes.uber = data.times;
            	});

//		we can switch others on as we have access for their APIs  	

//			ETAService.olaETA(currentLocation).then(function(data) {
//	                $scope.oExpectedTimes.ola = {};
//	                $scope.oExpectedTimes.ola = data;
//	        	});

//			ETAService.tfsETA(currentLocation).then(function(data) {
//	                $scope.oExpectedTimes.tfs = {};
//	                $scope.oExpectedTimes.tfs = data;
//	        	});
    	});
        
    };
}