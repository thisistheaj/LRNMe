angular.module('LRNMe')

.controller('GoalsCtrl', function($scope,Goals) {
  $scope.goals = Goals.allGoals();

})
