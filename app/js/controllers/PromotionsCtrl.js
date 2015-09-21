/**
 * Promotions Controller
 */

appControllers.controller('PromotionsCtrl', ['$scope', '$http', 'GeoLocationService', 'PromotionsService', PromotionsCtrl]);

function PromotionsCtrl($scope, $http, GeoLocationService, PromotionsService) {
    $scope.promotionsList = {};

    $scope.getPromotions = function() {

    	// get location of the user first, then request ETAs for cab services
        GeoLocationService.currentLocation().then(function(currentLocation){

    		// once we have location, we request for promotions from cab services
            PromotionsService.uberPromotions(currentLocation).then(function(data) {
                    $scope.promotionsList.uber = [];
                    $scope.promotionsList.uber.push(data);
                });

//		we can switch others on as we have access for their APIs  	

//            PromotionsService.olaPromotions(currentLocation).then(function(data) {
//                    $scope.promotionsList.ola = [];
//                    $scope.promotionsList.ola.push(data);
//                });
//            PromotionsService.tfsPromotions(currentLocation).then(function(data) {
//                    $scope.promotionsList.tfs = [];
//                    $scope.promotionsList.tfs.push(data);
//                });
        });
    };    
}