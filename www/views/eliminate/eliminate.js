angular.module('LRNMe')

.controller('EliminateCtrl', function($scope,Goal) {
  $scope.goal = Goal.getGoal();

  $scope.removeItem = function(subgoal) {
    $scope.goal.subgoals.splice($scope.goal.subgoals.indexOf(subgoal),1);
  }
})
