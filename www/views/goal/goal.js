angular.module('LRNMe')

.controller('GoalCtrl', function ($scope, Goal, Goals) {
  $scope.goals = Goals.allGoals();
  $scope.goal = Goal.getGoal();

  $scope.add = function (g) {
    $scope.goals.push(g)
  }
})
