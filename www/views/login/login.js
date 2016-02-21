angular.module('LRNMe')

.controller('LoginCtrl', function($scope, User, CloudMine) {
  $scope.user = User.user();

  $scope.save = function() {
    User.setUser();
  }

  $scope.login = function(){
    CloudMine.login(user.userName,user.password);
  }

  $scope.create = function () {
    CloudMine.createUser(user.userName,user.password);
  }

})
