angular.module('LRNMe')

.controller('LoginCtrl', function($scope, User, CloudMine) {
  $scope.user = User.user();

  //$scope.saveAndSend = function(un,pw) {
  //  User.setUser();
  //  var didlogin = CloudMine.login(un,pw);
  //  alert(didlogin);
  //  if(!didlogin) {
  //    CloudMine.createUser(un,pw);
  //  }
  //}
})
