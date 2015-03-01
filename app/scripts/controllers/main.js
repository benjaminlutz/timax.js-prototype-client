'use strict';

/**
 * @ngdoc function
 * @name timaxjsPrototypeClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timaxjsPrototypeClientApp
 */
angular.module('timaxjsPrototypeClientApp')
    .controller('MainCtrl', function ($scope, tokenService) {
        $scope.hasToken = false;

        $scope.doLogin = function () {
            tokenService.getToken().then(function () {
                $scope.hasToken = true;
            });
        };
    });
