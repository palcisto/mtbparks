(function() {
  'use strict';

  // angular.module('pass.directives', []);

  angular
    .module('pass')
    .directive('park', park);

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
})();
