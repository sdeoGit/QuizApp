'use strict';

/**
 * @ngdoc overview
 * @name appAngularGruntApp
 * @description
 * # appAngularGruntApp
 *
 * Main module of the application.
 */
angular
.module('appAngularGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'views/Test.html',
        controller: 'TestCtrl',
        controllerAs: 'test'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

