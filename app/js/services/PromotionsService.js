/**
 * This services fetches the respective promotions for each cab service.
 */

appServices.factory('PromotionsService', ['$http', '$q', getPromotions ]);

function getPromotions($http, $q) {
  return {
    uberPromotions: function(currentLocation) {
      var deferred = $q.defer();

      //TODO: solve the CORS issue @ api.uber.com
      var URL = 'http://crossorigin.me/https://api.uber.com/v1/promotions?server_token=qdz8lRtD7ssaHHAfFDoqoRIiZaEPnbDGzq6YMQ86';
        
      var options = {
        "start_latitude": currentLocation.coords.latitude,
        "start_longitude": currentLocation.coords.longitude,
        "end_latitude": currentLocation.coords.latitude,
        "end_longitude": currentLocation.coords.longitude
      };

      $http({ url: URL, method: "GET", params: options }).success(function(data) {
        deferred.resolve(data);
      }).error(function(data, status) {
        deferred.reject(data);
      });

      return deferred.promise;
    },

    olaPromotions: function(){
    },

    tfsPromotions: function(){
    }
  }
};