'use strict';

/**
 * @ngdoc function
 * @name timaxjsPrototypeClientApp.controller:BookingsCtrl
 * @description
 * # BookingsCtrl
 * Controller of the timaxjsPrototypeClientApp
 */
angular.module('timaxjsPrototypeClientApp')
    .controller('BookingsCtrl', function ($scope, bookingService, bookings, timaxSocket) {
        $scope.bookings = bookings.data;

        $scope.newBooking = {
            name: '',
            start: '',
            end: ''
        };

        $scope.saveNewBooking = function () {
            bookingService.saveBooking($scope.newBooking).then(function (response) {
                $scope.bookings.push(response.data);
                $scope.newBooking = {
                    name: '',
                    start: '',
                    end: ''
                };
            });
        };

        $scope.$on('socket:booking', function (ev, data) {
            console.log(data);
        });
    });
