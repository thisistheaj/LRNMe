angular.module('LRNMe')

.controller('GoalCtrl', function ($scope, Goal) {
  $scope.goal = Goal.getGoal();

})
