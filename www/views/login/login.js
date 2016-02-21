angular.module('LRNMe')

.controller('LoginCtrl', function($scope) {

  // this is probably the server booting up when user opens the app
  $scope.ws = new cloudmine.WebService({
    appid: '88855b6c94bd4c56b69de071383952f1',
    apikey: '64791DE156704F42816894A0A305D75A'
  });

  // MAKING THE HTTP REQUEST USING .api() RATHER THAN MAKING IT FROM SCRATCH
  var on_datetime = "2014-10-24T04:20:00Z";
  $scope.ws.api("code/schedule", {method: "PUT"}, {
    on_datetime: on_datetime,             // scheduling parameter - run once on this date
    appid: appid,                         // appid with code snippet to run
    apikey: apikey,                       // apikey for app
    snippet: "snippet_name",              // code snippet to call
    params: {                             // params passed into snippet
    },
  }).on("complete", function(res){
    console.log(util.inspect(res, null, 5));
  });


  // USER CREATING AN ACCOUNT
  $scope.createAccount = function(){
    // create an object in cloudmine server for the specific user
    $scope.ws.createUser('nduba@nyu.edu', 'kp4iOr23x').on('success', function(data, response) {
      console.log(data);
    });

  }

  // USER LOGGING IN WITH PASSWORD
  $scope.ws.login('user@example.com', 'brrr212').on('success', function(data, response) {
    console.log(data);
    // Now you can save the session token using localStorage
    localStorage.setItem('cm_session', response.session_token);
  });

  $scope.ws.login({
    email: "email@example.com",
    username: "username",
    password: "password"
  }).on('success', function(data, response){
    console.log(data);
  });


  // USER LOGGING OUT
  $scope.ws.logout().on('success', function() {
    // Clear the locally-stored session_token which is no invalid.
    window.localStorage && localStorage.removeItem('cm_session');
  });

  // SAVING MULTIPLE TASKS OF USER
  // Assuming your ws WebService instance was used to login a user
  $scope.ws.set({
    'myCat': {
      name: 'Moki',
      age: 2
    },
    'friendsCat': {
      name: 'Pan',
      age: 3
    }
  }).on('success', function(data, response) {
    console.log(data);
    // { myCat: 'created', friendsCat: 'created' }
  });

  // UPDATE USER TASK
  $scope.ws.update('myCar', { color: 'black' }).on('success', function(data, response) {
    console.log(data);
  });

  $scope.ws.destroy(null, { query: '[__class__ = "CMCar"]' }).on('success', function(data, response) {
    console.log(data);
    // { objid1: 'deleted', objid2: 'deleted' }
  });


  // PUSH NOTIFICATION
  var notification = {
    text: "Hello world!",
    /* other fields, see below... */
    users: [                 // list of specific users
      "4d81718682b64e42a39b6c6606397821",
      { email: "user@example.com" },
      { username: "username" }
    ]
  };

  $scope.ws.pushNotification(notification).on('success', function(data, response) {
    console.log(data);
  })

  // THERE ARE CODE SNIPPETS TO MAKE JAVASCRIPT SERVER CODE THAT ARE
  // SOLELY IN SERVICE PROVIDER'S (IN THIS CASE WE TEAM MEMBERS) CLOUDMINE
  // ACCOUNT TO ARRANGE USER DATA. THIS WOULD BE USEFUL FOR CROWD SOURCING
  // BUT FOR CODEFEST WE ARE NOT DOING THAT.

})
