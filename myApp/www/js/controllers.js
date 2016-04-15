
angular.module('starter.controllers', [])

.controller('loginCtrl', ["$scope", "$ionicPopup", "$state", "$rootScope", "$firebaseAuth", "$ionicHistory",
	function($scope, $ionicPopup, $state, $rootScope, $firebaseAuth, $ionicHistory) {

		$scope.user={};

		//database connection
	    var ref = new Firebase("https://sensatie.firebaseio.com");

	    $scope.authObj = $firebaseAuth(ref);

	    $scope.facebook=function()
	    {
	    	$scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
			  console.log("U bent ingelogd als:", authData);
			  $rootScope.check = {};
			  $rootScope.check.facebook = authData.facebook.displayName;
				$rootScope.check.facebookprofileImageURL = authData.facebook.profileImageURL;
			  console.log("facebook name ", $rootScope.check.facebook);
				 $ionicHistory.nextViewOptions({
			    disableBack: true
  												});
			$state.go('app.home');
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			});

	    }



		$scope.forgot=function()
		{
			$scope.authObj.$resetPassword({
			  email: $scope.user.email
			}).then(function() {
			  console.log("Wachtwoord reset is gelukt!");
			}).catch(function(error) {
			  console.error("Error: ", error);
			});
		}

		$scope.login=function()
		{
			$scope.authObj.$authWithPassword({
			  email: $scope.user.email,
			  password: $scope.user.password
			}).then(function(authData) {
			  console.log("U bent ingelogd als:", authData);

			  $rootScope.check = {};

			var authData = $scope.authObj.$getAuth();
			if (authData) {
			  $rootScope.check.email= authData.password.email;//for ng show
			  console.log("Account, U bent ingelogd als:", $rootScope.check.email);
				 $ionicHistory.nextViewOptions({
			    disableBack: true
  												});
			  $state.go('app.home');//switch to account tab
			} else {
			  console.log("U ben uitgelogd!");
			}
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
		  		//error messages
			   var alertPopup = $ionicPopup.alert({
			     title: 'Inlog problemen!',
			     template: error
			   });
			   alertPopup.then(function(res) {
			     console.log('Alert closed');
			   });

			});
			console.log($scope.user.email + " and " + $scope.user.password);
		}

	}
])

.controller('signupCtrl', ["$scope", "$state", "$rootScope", "$firebaseAuth",
 	function($scope, $state, $rootScope, $firebaseAuth) {
		var isNewUser = true;
		var ref = new Firebase("https://sensatie.firebaseio.com");
		ref.onAuth(function(authData) {
			if (authData && isNewUser) {
			ref.child("users").child(authData.uid).set({
			provider: authData.provider,
			email: authData.password.email,
			name: getName(authData)
			});
		}
		var messageListRef = new Firebase('https://sensatie.firebaseio.com/users');
		var newMessageRef = messageListRef.push();
newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
// We've appended a new message to the message_list location.
var path = newMessageRef.toString();
		});

		function getName(authData) {
			switch(authData.provider) {
				case 'password':
					return authData.password.email.replace(/@.*/, '');
				case 'facebook':
					return authData.facebook.displayName;
				}
		}





		$scope.newUser={};

	    var ref = new Firebase("https://sensatie.firebaseio.com");
			$scope.authObj = $firebaseAuth(ref);



		$scope.signup=function()
		{
			$scope.authObj.$createUser({
			  email: $scope.newUser.email,
			  password: $scope.newUser.password
			}).then(function(userData) {

			  console.log("User " + userData.uid + " created successfully!");

			  return $scope.authObj.$authWithPassword({
			    email: $scope.newUser.email,
			    password: $scope.newUser.password
			  });
			}).then(function(authData) {

			  console.log("U bent ingelogd als:", authData);
			  $rootScope.check = {};

			var authData = $scope.authObj.$getAuth();
			if (authData) {
			  $rootScope.check.email= authData.password.email;//for ng show
			  console.log("Account, Logged in as:", $rootScope.check.email);
			  $state.go('app.home');//switch to account tab
			} else {
			  console.log("Logged out");
			}
			}).catch(function(error) {
			  console.error("Error: ", error);
			  //error messages
			   var alertPopup = $ionicPopup.alert({
			     title: 'Signup Error',
			     template: error
			   });
			   alertPopup.then(function(res) {
			     console.log('Alert closed');
			   });
			});

		}
	}
])



.controller('HomeCtrl', function($scope, $ionicPopup,germanyApi) {


})

.controller('AccountCtrl', ["$scope", "$rootScope", "$state", "$firebaseAuth", "$ionicHistory", "$ionicPopup",
	function($scope, $rootScope, $state, $firebaseAuth, $ionicHistory, $ionicPopup) {

		//database connection
		var ref = new Firebase("https://sensatie.firebaseio.com");
	    $scope.authObj = $firebaseAuth(ref);
	    $scope.reset={};

	    $scope.resetPassword=function()
	    {
	    	$scope.authObj.$changePassword({
			  email: $rootScope.check.email,
			  oldPassword: $scope.reset.oldPassword,
			  newPassword: $scope.reset.newPassword
			}).then(function() {
			  console.log("Password changed successfully!");
			}).catch(function(error) {
			  console.error("Error: ", error);
			});
	    }

		$scope.logout=function()
		{
			$scope.authObj.$unauth();
						  console.log("U bent uitgelogd ");

				 $ionicHistory.nextViewOptions({
			    disableBack: true
  												});
			$state.go('app.home');//switch to home tab
			$rootScope.check.email = null;//for ng show
			$rootScope.check.facebook = null;
			$ionicPopup.alert({
		title: 'U bent succesvol uitgelogd',
		content: '',
	}).then(function(res) {
		console.log('Test Alert Box');
	});
		}
	}
])

.controller('EnglandCtrl', function($scope,engelandApi) {

  engelandApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;

  }),
  engelandApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  });

})

.controller('engelandteaminfoApi', function($scope,engelandteaminfoApi) {
  engelandteaminfoApi.getTeam().success(function(data){
    $scope.teams=data;
		$scope.loader=true;
     });

})

// .controller('engelandfixturesApi', function($scope,engelandfixturesApi) {
//   engelandfixturesApi.getTeam().success(function(data){

//  $scope.isActive = data.fixtures.filter(function(value) {
//    return value.status !== "FINISHED";
//  });
//   });

// })

.controller('SpainCtrl', function($scope,spainApi, $ionicLoading, $timeout) {

  spainApi.getTeams().success(function(data){
		$ionicLoading.show({
		 	content: '<ion-spinner class="spinner-energized"></ion-spinner>',
		 	animation: 'fade-in',
			hideOnStageChange: true,
		 	showBackdrop: false,
		 	maxWidth: 300,
		 	showDelay: 0
		 });
	$timeout(function () {
			$ionicLoading.hide();
			$scope.teams=data;
			$scope.league=data.leagueCaption;
		}, 700);
    });
})

.controller('ItalyCtrl', function($scope,italyApi,$ionicLoading,$timeout) {

  italyApi.getTeams().success(function(data){
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 300,
			showDelay: 0
		 });
	$timeout(function () {
	 		$ionicLoading.hide();
	    $scope.teams=data;
	    $scope.league=data.leagueCaption;
		}, 700);
    });
})

.controller('GermanyCtrl', function($scope,germanyApi) {

  germanyApi.getTeams().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
     });

})

.controller('DutchCtrl', function($scope,dutchApi) {

  dutchApi.getTeams().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
     });

})

.controller('FranceCtrl', function($scope,franceApi) {

  franceApi.getTeams().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
   });

});
