/**
 * This services fetches the current location of the user.
 */

appServices.factory('GeoLocationService', ['$http', '$q', '$window', getGeoLocation ]);

function getGeoLocation($http, $q, $window) {
  return {
    currentLocation: function() {
      var deferred = $q.defer();

      $window.navigator.geolocation.getCurrentPosition(function(position){
          deferred.resolve(position);
      }); 

      return deferred.promise;
    }
  }
};