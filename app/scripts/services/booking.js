'use strict';

/**
 * @ngdoc service
 * @name timaxjsPrototypeClientApp.booking
 * @description
 * # booking
 * Service in the timaxjsPrototypeClientApp.
 */
angular.module('timaxjsPrototypeClientApp')

    .factory('bookingService', function ($http) {
        var factoryObject = {};

        factoryObject.getBookings = function () {
            return $http.get('http://localhost:3000/booking');
        };

        factoryObject.saveBooking = function (newBooking) {
            return $http.post('http://localhost:3000/booking', newBooking);
        };

        return factoryObject;
    });
