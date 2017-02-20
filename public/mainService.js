angular.module('app')
.service('mainService', function($http) {

  this.getName = function() {
    return $http.get('/api/name').then(function(response) {
      return response.data;
    })
  };

  this.getLocation = function() {
    return $http.get('/api/location').then(function(response) {
      return response.data;
    })
  };

  this.getSecrets = function(username, pin) {
    return $http.get('/secrets/' + username + '/' + pin).then(function(response) {
      return response.data;
    })
  }


})
