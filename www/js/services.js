angular.module('LRNMe')

  .factory('User', function() {
    try {
      var user = angular.fromJson(localStorage.getItem('userData')) || {
          userName: "",
          password: ""
        };
    } catch (e) {
      var user = {
        userName: "",
        password: ""
      };
    }

    function store () {
      localStorage.setItem('userData', angular.toJson(user));
    }

    return {
      user: function() {
        return user;
      },
      setUser: function() {
        //user = u;
        store()
      }

    }
  })

  .factory('Goals', function() {
    try {
      var goals = angular.fromJson(localStorage.getItem('goalsData')) || [{
          name: "web dev 1",
          subgoals: []
        }, {
          name: "web dev 2",
          subgoals: []
        }];

    } catch (e) {
      var goals = [{
        name: "web dev 2",
        subgoals: []
      },{
        name: "web dev 1",
        subgoals: []
      }];
    };

    function store () {
      localStorage.setItem('goalsData', angular.toJson(goals));
    }

    return {
      allGoals: function() {
        return goals;
      },
      addGoal: function() {
        store();
      },
    }
  })

  .factory('Goal', function () {
    var goal = {
      name: "",
      subgoals: []
    }

    return {
      getGoal: function(){
        return goal;
      }
    }
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


//.factory('Subgoals', function(GUID) {
//  try {
//    var items = angular.fromJson(localStorage.getItem('subgoals')) || [];
//    subgoals = items;
//  } catch (e) {
//    var subgoals = [
//      "three",
//      "two",
//      "one",
//    ];
//  }
//
//  function store () {
//    localStorage.setItem('subgoals', angular.toJson(subgoals));
//  }
//
//  return {
//    all: function() {
//      return subgoals;
//    },
//    remove: function(subgoal) {
//      subgoals.splice(subgoals.indexOf(subgoal), 1);
//      store();
//    },
//    add: function(subgoal) {
//      subgoals.push(subgoal + GUID.getNext());
//      store();
//    }
//  };
//})
