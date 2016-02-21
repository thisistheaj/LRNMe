angular.module('LRNMe')

.controller('BuddyCtrl', function($scope,Goal, Goals) {
  $scope.goal = Goal.getGoal();
  $scope.goals = Goals.allGoals()


  $scope.addBuddy = function(buddy) {
    $scope.goal.buddy = buddy;
  }

  $scope.saveGoal = function(){
    $scope.goals.push($scope.goal);
    Goals.addGoal();
  }

})
