(function() {
  'use strict';

  angular.module('mtbparks.controllers', []);

  function mtbparksMainController(parkPerks) {
    var vm = this;

    vm.parks = parkPerks.getParks();
    console.log(vm.parks);
  }

  angular
    .module('mtbparks.controllers')
    .controller('mtbparksMainController', ['parkPerks',mtbparksMainController]);

})();
