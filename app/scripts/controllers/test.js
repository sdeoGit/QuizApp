'use strict';

angular.module('appAngularGruntApp')
  .controller('TestCtrl', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.clickedTrue = false;
    $scope.clickedFalse = false;
    $scope.selectedResponse = {};
    $scope.points = 0;
    $scope.indexToShow = 0;
    $scope.questionCount = 0;
    $scope.Done = false;
    $scope.Complete = true;
    var RespCount = 0;

    $scope.questions = dataService.questions;


    angular.forEach($scope.questions, function () {
      $scope.questionCount = $scope.questionCount + 1;
    });


    $scope.toggleTick = function (element) {
      if (element === true) {
        $scope.clickedTrue = true;
        $scope.clickedFalse = false;
      } else if (element === false) {
        $scope.clickedTrue = false;
        $scope.clickedFalse = true;
      }
      $scope.selectedResponse.response = element;
    };


    $scope.checkResponse = function (correctResponse) {
      $scope.indexToShow = ($scope.indexToShow + 1) % $scope.questionCount;
      console.log(" $scope.indexToShow", $scope.indexToShow);
      if ($scope.selectedResponse.response == correctResponse) {
        $scope.points = $scope.points + 10;
        //alert("Eureka !! correct response");
      } else {
        //alert("Better luck next time !! wrong answer")
      }
      $scope.clickedTrue = false;
      $scope.clickedFalse = false;
      
      RespCount = RespCount + 1;  
      
      console.log($scope.Done);
      if ($scope.questionCount === RespCount) {
          $scope.Done = true;
          $scope.Complete = false;
      }

    }


  }]);