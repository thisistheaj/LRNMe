angular.module('LRNMe')

.controller('TaskCtrl', function($scope, Goal) {
  $scope.goal = Goal.getGoal();
})
