
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
			     title: 'De gegeven gebruiker bestaat niet',
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
			email: authData.password.email,
			name: getName(authData),
			"competities":{
			premiereleague:true,
			primeradivision:true,
			seriea:true,
			eredivisie:true,
			bundesliga:true,
			lique1:true }
		});
		}
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



.controller('HomeCtrl',  ["$scope", "$firebaseObject",
  function($scope, $firebaseObject) {
    var ref = new Firebase("https://sensatie.firebaseio.com");
    // download physicsmarie's profile data into a local object
    // all server changes are applied in realtime
    $scope.profile = $firebaseObject(ref.child('sensatie').child('users'));
  }
])

.controller('AccountCtrl', ["$scope", "$rootScope", "$state", "$firebaseAuth", "$ionicHistory", "$ionicPopup",
	function($scope, $rootScope, $state, $firebaseAuth, $ionicHistory, $ionicPopup, $ionicSlideBoxDelegate) {
		// Called to navigate to the main app
	   $scope.startApp = function() {
	     $state.go('main');
	   };
	   $scope.next = function() {
	     $ionicSlideBoxDelegate.next();
	   };
	   $scope.previous = function() {
	     $ionicSlideBoxDelegate.previous();
	   };

	   // Called each time the slide changes
	   $scope.slideChanged = function(index) {
	     $scope.slideIndex = index;
	   };
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
  }),
	engelandApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	engelandApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	engelandApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
})

.controller('SpainCtrl', function($scope,spainApi) {

	spainApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
  }),
  spainApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  }),
	spainApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	spainApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	spainApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
})

.controller('ItalyCtrl', function($scope,italyApi) {

	italyApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
  }),
  italyApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  }),
	italyApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	italyApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	italyApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
})

.controller('GermanyCtrl', function($scope,germanyApi) {

	germanyApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
  }),
  germanyApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  }),
	germanyApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	germanyApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	germanyApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
})
// .controller('engelandteaminfoApi', function($scope,engelandteaminfoApi) {
//   engelandteaminfoApi.getTeam().success(function(data){
//     $scope.teams=data;
// 		$scope.loader=true;
//      });
//
// })

// .controller('engelandfixturesApi', function($scope,engelandfixturesApi) {
//   engelandfixturesApi.getTeam().success(function(data){

//  $scope.isActive = data.fixtures.filter(function(value) {
//    return value.status !== "FINISHED";
//  });
//   });

// })

// spainApi.getTeams().success(function(data){
// 	$ionicLoading.show({
// 		content: '<ion-spinner class="spinner-energized"></ion-spinner>',
// 		animation: 'fade-in',
// 		hideOnStageChange: true,
// 		showBackdrop: false,
// 		maxWidth: 300,
// 		showDelay: 0
// 	 });
// $timeout(function () {
// 		$ionicLoading.hide();
// 		$scope.teams=data;
// 		$scope.league=data.leagueCaption;
// 	}, 700);
// }),
// spainApi.getFixtures().success(function(data){
// 	$scope.isActive = data.fixtures.filter(function(value) {
// 	return value.status == "IN_PLAY";
// 	});
// }),
// spainApi.getFixtures().success(function(data){
// 	$scope.isFinished = data.fixtures.filter(function(value) {
// 	return value.status == "FINISHED";
// 	});
// }),
// spainApi.getFixtures().success(function(data){
// 	$scope.isTimed = data.fixtures.filter(function(value) {
// 	return value.status == "TIMED";
// 	});
// }),
// spainApi.getTeam().success(function(data){
// 	$scope.teams=data;
// 	$scope.loader=true;
// });

// .controller('ItalyCtrl', function($scope,italyApi,$ionicLoading,$timeout) {
//
//   italyApi.getTeams().success(function(data){
// 		$ionicLoading.show({
// 			content: 'Loading',
// 			animation: 'fade-in',
// 			showBackdrop: true,
// 			maxWidth: 300,
// 			showDelay: 0
// 		 });
// 	$timeout(function () {
// 	 		$ionicLoading.hide();
// 	    $scope.teams=data;
// 	    $scope.league=data.leagueCaption;
// 		}, 700);
//     });
// })


.controller('DutchCtrl', function($scope,dutchApi) {

	dutchApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
  }),
  dutchApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  }),
	dutchApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	dutchApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	dutchApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
})

.controller('FranceCtrl', function($scope,franceApi) {

	franceApi.getLeague().success(function(data){
    $scope.teams=data;
    $scope.league=data.leagueCaption;
  }),
  franceApi.getFixtures().success(function(data){
    $scope.isActive = data.fixtures.filter(function(value) {
    return value.status == "IN_PLAY";
    });
  }),
	franceApi.getFixtures().success(function(data){
		$scope.isFinished = data.fixtures.filter(function(value) {
		return value.status == "FINISHED";
		});
	}),
	franceApi.getFixtures().success(function(data){
		$scope.isTimed = data.fixtures.filter(function(value) {
		return value.status == "TIMED";
		});
	}),
	franceApi.getTeam().success(function(data){
		$scope.team=data;
		$scope.loader=true;
	});
});
