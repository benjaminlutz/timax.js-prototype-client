'use strict';

/**
 * @ngdoc interceptor
 * @name timaxjsPrototypeClientApp.authToken
 * @description
 * # auth Token interceptor
 * Interceptor in the timaxjsPrototypeClientApp.
 */
angular.module('timaxjsPrototypeClientApp')

    .factory('authTokenInterceptor', function ($q, localStorageService) {
        return {
            'request': function (config) {
                var authToken = localStorageService.get('token');

                if (authToken) {
                    config.headers['Authorization'] = 'Bearer ' + authToken;
                }
                return config || $q.when(config);
            }
        };
    });
