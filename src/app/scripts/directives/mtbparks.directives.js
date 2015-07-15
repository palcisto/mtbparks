(function() {
  'use strict';

  angular.module('mtbparks.directives', []);

  function park() {
    function link() {
      // console.log('parkPerksDirective initialized');
    }

    return {
      restrict: 'EA',
      link: link,
      templateUrl: 'app/partials/park.html'
    }
  }

  angular
    .module('mtbparks.directives')
    .directive('park', park);
})();
