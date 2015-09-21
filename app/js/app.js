'use strict';

var app = angular.module('Collate', ['ui.bootstrap', 'ui.router', 'ngCookies', 'appControllers', 'appServices', 'appDirectives']);
var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

/**
 * Route configuration for the Collate module.
 */
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('promotions', {
                url: '/promotions',
                templateUrl: 'templates/promotions.html'
            });
    }
]);