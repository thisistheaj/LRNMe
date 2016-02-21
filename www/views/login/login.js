angular.module('LRNMe')

.controller('LoginCtrl', function($scope) {

  // this is probably the server booting up when user opens the app
  $scope.ws = new cloudmine.WebService({
    appid: '88855b6c94bd4c56b69de071383952f1',
    apikey: '64791DE156704F42816894A0A305D75A'
  });

  // user creating an account
  $scope.createAccount = function(){
    // create an object in cloudmine server for the specific user
    $scope.ws.createUser('nduba@nyu.edu', 'kp4iOr23x').on('success', function(data, response) {
      console.log(data);
      //{
       //__id__: '52e882fb088747668af4a1670b1d46fb',
       //__type__: 'user'
      //}
    });

  }

  // user logging in with password
  $scope.ws.login('user@example.com', 'brrr212').on('success', function(data, response) {
    console.log(data);
    //    {
    //      expires: 'Fri, 31 Aug 2012 19:08:37 GMT',
    //      profile: {
    //        __id__: '52e882fb088747668af4a1670b1d46fb',
    //        __type__: 'user'
    //      },
    //      session_token: 'ffcc32dc93c94c7d8045c77e5122a89d'
    //    }

    // Now you can save the session token using localStorage
    localStorage.setItem('cm_session', response.session_token);
  });

  $scope.ws.login({
    email: "email@example.com",
    username: "username",
    password: "password"
  }).on('success', function(data, response){
    console.log(data);
    //    {
    //      expires: 'Fri, 31 Aug 2012 19:08:37 GMT',
    //      profile: {
    //        __id__: '52e882fb088747668af4a1670b1d46fb',
    //        __type__: 'user'
    //      },
    //      session_token: 'ffcc32dc93c94c7d8045c77e5122a89d'
    //    }
  });


})
