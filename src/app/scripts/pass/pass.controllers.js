(function() {
  'use strict';

  // angular.module('pass.controllers', []);

  angular
    .module('pass')
    .controller('passController', passController);

  passController.$inject = ['passService'];

  function passController(passService) {
    var vm = this;
    vm.parks = [];

    activate();

    function activate() {
      /**
       * Step 1
       * Ask the getParks function for the
       * park data and wait for the promise
       */
      return getParks().then(function() {
        /**
         *
         * Step 4
         * Perform an action on resolve of final promise
         */
        // logger.info('Activated Parks view');
        console.log('Activated Parks View');
      });
    }

    function getParks() {
      /**
       * Step 2
       * Ask the data service for the data and wait
       * for the promise
       */
      return passService.getParks()
        .then(function(data) {
          /**
           * Step 3
           * Set the data and resolve the promise
           */
          vm.parks = data.data;
          return vm.parks;
        });
    }
  }
})();
