/**
 * This services fetches the respective expected time to reach the current location of user, for each cab service.
 */

appServices.factory('ETAService', ['$http', '$q', expectedTimes ]);

function expectedTimes($http, $q) {
  return {

    // fetch turnaround time for UBER services
    uberETA: function(currentLocation) {
      var deferred = $q.defer();
      
      //TODO: solve the CORS issue @ api.uber.com
      var URL = 'http://crossorigin.me/https://api.uber.com/v1/estimates/time?server_token=qdz8lRtD7ssaHHAfFDoqoRIiZaEPnbDGzq6YMQ86';
        
      var options = {
          "start_latitude": currentLocation.coords.latitude,
          "start_longitude": currentLocation.coords.longitude
        }

      $http({ url: URL, method: "GET", params: options }).success(function(data) {
        deferred.resolve(data);
      }).error(function(data, status) {
        deferred.reject(data);
      });

      return deferred.promise;
    },

    // fetch turnaround time for OLA services
    olaETA: function(currentLocation){
    },

    // fetch turnaround time for TFS services
    tfsETA: function(currentLocation){
    }
  }
};