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
})

.factory('CloudMine', function() {

  var ws = new cloudmine.WebService({
    appid: '88855b6c94bd4c56b69de071383952f1',
    apikey: 'e621666e043d4351a330be8105553529'
  });

  // make an else statement for 'failure' case and notify user that
  // account can't be created. try again with different user name
  // format numbers_or_letters@letters.letters


  // alert("log is successful")


  // SAVING MULTIPLE TASKS OF USER
  // Assuming your ws WebService instance was used to login a user
//  ws.set({
////        'myCar': {
////            name: 'Moki',
////            age: 2
////        },
////        'friendsCat': {
////            name: 'Pan',
////            age: 3
////        }
//
//    // if you modify anything on following json doc and
//    // call this set function, as long as key which is this case
//    //  username is the same, the content on the doc will
//    // be modified in the server!
//    username: {
//      goal1: {
//        name: "goal1name",
//        subgoals: {
//          subgoal1: {
//            name: "subgoal1name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal2: {
//            name: "subgoal2name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal3: {
//            name: "subgoal3name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal4: {
//            name: "subgoal4name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          }
//        }
//
//      },
//      goal2: {
//        name: "goal2name",
//        subgoals: {
//          subgoal1: {
//            name: "subgoal1name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal2: {
//            name: "subgoal2name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal3: {
//            name: "subgoal3name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          },
//          subgoal4: {
//            name: "subgoal4name",
//            task: {
//              name1: "task1",
//              name2: "task2",
//              name3: "task3"
//            }
//          }
//        }
//
//      }}
//
//    // maybe have the followoing form
//
//    // and such
//
//  }).on('success', function(data, response) {
//    console.log(data);
//    // alert("anothet object just got created.")
//    // { myCat: 'created', friendsCat: 'created' }
//  });
//
//  var obj =  {
//    "name" : "goal3name",
//    "items" : [
//      {
//        "name" : "subgoal1name",
//        "items" : [
//          {
//            "name" : task1,
//            "items" : []
//          }
//        ]
//      },
//      {
//        "name" : "subgoal2name",
//        "items" : [
//          {
//            "name" : task1,
//            "items" : []
//          }
//        ]
//      },
//      {
//        "name" : "subgoal3name",
//        "items" : [
//          {
//            "name" : task1,
//            "items" : []
//          }
//        ]
//      },
//      {
//        "name": "subgoal4name",
//        "items": [
//          {
//            "name": task1,
//            "items": []
//          }
//        ]
//      }
//    ]
//  };
//  // alert("i AM HERE")
//
//  var html = [];
//
//  function createList(arr) {
//    html.push('<ul>');
//    $.each(arr, function(i, val) {
//      html.push('<li>' + val.name);
//      if (val.items) {
//        createList(val.items)
//
//      }
//      html.push('</li>');
//    });
//    html.push('</ul>');
//    // alert("probably works!")
//  }
//
//  createList(obj)
//  // $('body').append(html.join(''))
//
//
//
//  // UPDATE USER TASK
//  // how to access array inside an array? let's say task here?
//
//  ws.update('username', { goal1: "Scream" }).on('success', function(data, response) {
//    console.log(data);
//  });
//
//  // the format for parameter is not working : name = "Moki" and I tries few others
//  ws.destroy(null, { query: '[name = "Moki"]' }).on('success', function(data, response) {
//    console.log(data);
//    //alert("good morning!")
//    // { objid1: 'deleted', objid2: 'deleted' }
//  });
//
//  // overlooked this one for now
//  // PUSH NOTIFICATION
//  var notification = {
//    text: "Hello world!",
//    users: [     // list of specific users
//      "4d81718682b64e42a39b6c6606397821",
//      { email: "user@example.com" },
//      { username: "username" }
//    ]
//  };
//
//  // same
//  ws.pushNotification(notification).on('success', function(data, response) {
//    console.log(data);
//  })
//
//  // dummy alert
//  for(var i=1; i<=3; i++) {
//    alert("Rabbit "+i+" out of the hat!")
//  }

  return {
    createUser: function (email,password) {

      //var ws = new cloudmine.WebService({
      //  appid: '88855b6c94bd4c56b69de071383952f1',
      //  apikey: 'e621666e043d4351a330be8105553529'
      //});

      // ws.createUser(email, password)
      // email will be stored if the format is numbers_or_letters@letters.letters,
      // otherwide it will fail and user object won't be stored.
      ws.createUser(email, password).on('success', function (data, response) {
        alert("something");
        // {
        //    __id__: '52e882fb088747668af4a1670b1d46fb',
        //    __type__: 'user'
        //
      })
    },
    login: function (email, password) {
      ws.login({
        email: email,
        username: "",
        password: password
      }).on('success', function(data, response){

      });

      // dumbest code ever : this should be inside login
      // as it will create a object instance of the user who successfully logged in
      // but I guess fot now, we will assume user successfully logged in
      // and set up an object anyway,
      // but the data and response here is basiccaly coming
      // from login email, username and password

      ws.set({
        'code@code.com': {
          Goal: "data",
          Subgoals: "response"
        }
      }).on('success', function(data, response) {
        console.log(data);
        //alert("user object is created")
        // { myCat: 'created', friendsCat: 'created' }
      });
    }
  };
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
