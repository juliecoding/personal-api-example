angular.module('app')
.controller('mainCtrl', function($scope, mainService) {

$scope.getName = function() {
  mainService.getName().then(function(response) {
    $scope.name = response;
  });
}

$scope.getLocation = function() {
  mainService.getLocation().then(function(response) {
    $scope.location = response;
  })
};

$scope.getSecrets = function(username, pin) {
  mainService.getSecrets(username, pin).then(function(response) {
    $scope.secrets = response;
  })
}



})
