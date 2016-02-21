angular.module('LRNMe')

  .factory('Subgoals', function(GUID) {
    try {
      var items = angular.fromJson(localStorage.getItem('subgoals')) || [];
      subgoals = items;
    } catch (e) {
      var subgoals = [
        "three",
        "two",
        "one",
      ];
    }

    function store () {
      localStorage.setItem('subgoals', angular.toJson(subgoals));
    }

    return {
      all: function() {
        return subgoals;
      },
      remove: function(subgoal) {
        subgoals.splice(subgoals.indexOf(subgoal), 1);
        store();
      },
      add: function(subgoal) {
        subgoals.push(subgoal + GUID.getNext());
        store();
      }
    };
  })

.factory('GUID', function() {
  try {
    var num = angular.fromJson(localStorage.getItem('i')) || 0;
    i = num;
  } catch (e) {
    var i = 0;
  }

  return {
    getNext: function() {
      i++
      localStorage.setItem('i', angular.toJson(i));
      return "" + i;
    }
  }
});
