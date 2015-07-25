(function() {
  'use strict';
  
  // angular.module('pass.services', []);

  angular
    .module('pass')
    .factory('passService', passService);

  passService.$inject = ['$http', '$q'];

  function passService($http, $q) {
    var apiUrl = '//private-2132e-mtbparks.apiary-mock.com';

    var service = {
      createPark: createPark,
      getParks: getParks,
      getPark: getPark,
      updatePark: updatePark,
      deletePark: deletePark
    }

    return service;

    function getParks() {
      return $http.get(apiUrl + '/pass-parks')
        .then(getParksComplete)
        .catch(getParksFailed);

      function getParksComplete(response) {
        return response.data.data;
      }

      function getParksFailed(error) {
        logger.error('XHR failed for getparks.' + error.data);
      }
    }

    function getPark(id) {
      return function() {
        console.log('getPark(id)');
      }
    }

    function createPark() {
      return function() {
        console.log('createPark()');
      }
    }

    function updatePark(id) {
      return function() {
        console.log('updatePark(id)');
      }
    }

    function deletePark(id) {
      return function() {
        console.log('deletePark(id)');
      }
    }

    // function getDataFailed(error) {
    //   //something went wrong
    //   return $q.reject('There was an error in retrieving the data. Status: ' + error.status);
    //     console.log(response.data);
    // }
  }
})();
