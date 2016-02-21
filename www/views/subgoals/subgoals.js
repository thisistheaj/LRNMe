angular.module('LRNMe')

  .controller('SubGoalsCtrl', function($scope,$ionicPopup, Goal) {
    $scope.goal = Goal.getGoal();

    $scope.addItem = function(name) {
      $scope.goal.subgoals.push({
        name: name,
        tasks: []
      });
    }

    $scope.removeItem = function(subgoal){
      $scope.goal.subgoals.splice($scope.goal.subgoals.indexOf(subgoal),1);
    }

    $scope.showPopup = function() {
      $scope.data = {}

      // Custom popup
      $ionicPopup.show({
        template: '<input type = "text" ng-model = "data.model">',
        title: 'Add Subgoal',
        subTitle: 'List as many as you can!',
        scope: $scope,

        buttons: [
          { text: 'Cancel' }, {
            text: '<b>Add</b>',
            type: 'button-positive',
            onTap: function() {
              if (!$scope.data.model) {
                e.preventDefault();
              } else {
                $scope.addItem($scope.data.model);
              }
            }
          }
        ]
      });
    };
  })
