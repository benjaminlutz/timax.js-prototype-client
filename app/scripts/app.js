'use strict';

/**
 * @ngdoc overview
 * @name timaxjsPrototypeClientApp
 * @description
 * # timaxjsPrototypeClientApp
 *
 * Main module of the application.
 */
angular
  .module('timaxjsPrototypeClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bookings', {
        templateUrl: 'views/bookings.html',
        controller: 'BookingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });