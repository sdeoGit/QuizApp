'use strict';

/**
 * @ngdoc function
 * @name appAngularGruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appAngularGruntApp
 */
angular.module('appAngularGruntApp')
  .controller('MainCtrl',['$scope','dataService', function ($scope,dataService) {
    console.log("data",dataService);
      

  }]);
