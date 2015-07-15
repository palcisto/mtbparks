angular.module('mtbparks', [
  'ui.utils',
  'ngMessages',
  'mtbparks.controllers',
  'mtbparks.services',
  'mtbparks.directives'
  ])
  .config(function($locationProvider) {

    // var API_URL = '//'+location.hostname+'/api';
    // if(location.port) API_URL = 'http://'+location.hostname+':3000/api';

    // // NG TOKEN AUTH CONFIGURATION
    // $authProvider.configure({
    //   apiUrl:                  API_URL,
    //   tokenValidationPath:     '/auth/validate_token',
    //   signOutUrl:              '/auth/sign_out',
    //   emailSignInPath:         '/auth/sign_in'
    // });

    $locationProvider.html5Mode(true);

    console.log('App initialized!');
  });
