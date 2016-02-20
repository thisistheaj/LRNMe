angular.module('LRNMe')

  .controller('SubGoalsCtrl', function($scope,$ionicPopup) {
    $scope.items = [
      "one",
      "two",
      "three"
    ]

    $scope.addItem = function(item) {
      items.push(item);

    }

    $scope.showPopup = function() {
      $scope.data = {}

      // Custom popup
      $ionicPopup.show({
        template: '<input type = "text" ng-model = "data.model">',
        title: 'Add Item',
        subTitle: 'What do you need to do?',
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
