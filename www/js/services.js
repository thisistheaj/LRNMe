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
      var goals = angular.fromJson(localStorage.getItem('goalsData')) || [];

    } catch (e) {
      var goals = [];
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
      i++;
      localStorage.setItem('i', angular.toJson(i));
      return "" + i;
    }
  }
})

.factory('CloudMine', function() {

  //var ws = new cloudmine.WebService({
  //  appid: '88855b6c94bd4c56b69de071383952f1',
  //  apikey: 'e621666e043d4351a330be8105553529'
  //
  //});

// paste it here

  return {
    createUser: function (email, password) {

      var ws = new cloudmine.WebService({
        appid: '88855b6c94bd4c56b69de071383952f1',
        apikey: 'e621666e043d4351a330be8105553529'

      });

      // ws.createUser(email, password)
      // email will be stored if the format is numbers_or_letters@letters.letters,
      // otherwide it will fail and user object won't be stored.
      //ws.createUser("luckymenow@email.com", "password").on('success', function (data, response) {
      alert(email + password);
      //})
      ws.createUser(email, password).on('success', function (data, response) {

        alert("createUser is activated in service.js");
      })
      // another paste would be here
    },
    login: function (email, password) {




      ws.login({
        email: email,
        username: "",
        password: password
      }).on('success', function (data, response) {
        return true;
      });
      return false;
      // dumbest code ever : this should be inside login
      // as it will create a object instance of the user who successfully logged in
      // but I guess fot now, we will assume user successfully logged in
      // and set up an object anyway,
      // but the data and response here is basiccaly coming
      // from login email, username and password

      //ws.set({
      //  'code@code.com': {
      //    Goal: "data",
      //    Subgoals: "response"
      //  }
      //}).on('success', function(data, response) {
      //  console.log(data);
      //  //alert("user object is created")
      //  // { myCat: 'created', friendsCat: 'created' }
      //});
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
