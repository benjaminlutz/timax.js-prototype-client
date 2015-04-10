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
        'ngTouch',
        'LocalStorageModule',
        'btford.socket-io'
    ])

    .factory('timaxSocket', function (socketFactory, localStorageService) {
        var token = localStorageService.get('token');

        var timaxSocket = socketFactory({
            ioSocket: io.connect('http://localhost:3000/', {
                query: 'token=' + token
            })
        });
        timaxSocket.forward('booking');
        return timaxSocket;
    })

    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('timax')
            .setStorageType('localStorage')
            .setNotify(true, true);
    })

    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('authTokenInterceptor');
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/bookings', {
                templateUrl: 'views/bookings.html',
                controller: 'BookingsCtrl',
                resolve: {
                    bookings: function (bookingService) {
                        return bookingService.getBookings();
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });
