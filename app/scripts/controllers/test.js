'use strict';

angular.module('appAngularGruntApp')
  .controller('TestCtrl', ['$scope', 'dataService','$mdToast','$timeout', function ($scope, dataService, $mdToast,$timeout) {

    $scope.clickedTrue = false;
    $scope.clickedFalse = false;
    $scope.selectedResponse = {};
    $scope.points = 0;
    $scope.indexToShow = 0;
    $scope.questionCount = 0;
    $scope.Done = false;
    $scope.Complete = true;
    $scope.Error = false;
    $scope.progressVal = 0;
    var RespCount = 0;

    
    //$scope.questions = dataService.questions;
    var _init = function() {
      dataService.getQuestion().then(function(questionData){
        $scope.questions = questionData;        
      });     
    };

    _init();


    var timeoutHandler = $timeout(function() {
      $timeout.cancel(timeoutHandler);
      angular.forEach($scope.questions, function () {
        $scope.questionCount = $scope.questionCount + 1;
      }); 
    }, 10);

    


    $scope.toggleTick = function (element) {
      if (element === true) {
        $scope.clickedTrue = true;
        $scope.clickedFalse = false;        
      } else if (element === false) {
        $scope.clickedTrue = false;
        $scope.clickedFalse = true;
      }
      $scope.selectedResponse.response = element;
      $scope.Error = false;
    };


    var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
  $scope.toastPosition = angular.extend({},last);
    $scope.getToastPosition = function() {

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

    $scope.showSimpleToast = function() {
        if ($scope.Error == true) {
          console.log($scope.Error);
        var pinTo = $scope.getToastPosition();
        $mdToast.show(
          $mdToast.simple()
            .textContent('Please select some response.')
             .position(pinTo )
            .hideDelay(3000)
        );

      }
      };



    $scope.checkResponse = function (correctResponse) {
      if ($scope.clickedTrue || $scope.clickedFalse) {
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
          $scope.progressVal = $scope.progressVal + 10; 
          //console.log($scope.Done);
          if ($scope.questionCount === RespCount) {
              $scope.Done = true;
              $scope.Complete = false;
          }          
      }else {
        $scope.Error = true;
      }       
    }


  }]);