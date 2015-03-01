'use strict';

/**
 * @ngdoc service
 * @name timaxjsPrototypeClientApp.token
 * @description
 * # token
 * Service in the timaxjsPrototypeClientApp.
 */
angular.module('timaxjsPrototypeClientApp')

    .factory('tokenService', function ($q, $http, localStorageService) {
        var factoryObject = {};

        factoryObject.getToken = function () {
            var deferred = $q.defer();

            $http.post('http://localhost:3000/token', {}).then(function (response) {
                var token = response.data;
                localStorageService.set('token', token);
                deferred.resolve({token: token});
            }, function (reason) {
                deferred.reject(reason);
            });

            return deferred.promise;
        };

        return factoryObject;
    });
