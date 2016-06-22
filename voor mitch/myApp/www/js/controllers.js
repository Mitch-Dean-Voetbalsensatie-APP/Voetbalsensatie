angular.module('starter.controllers', [])
//This is the Login Controller that has the following functions: facebook, forgot and login.//
.controller('loginCtrl', ["$scope", "$ionicPopup", "$state", "$rootScope", "$firebaseAuth", "$ionicHistory",
    function($scope, $ionicPopup, $state, $rootScope, $firebaseAuth, $ionicHistory) {
        $scope.user = {};
        var ref = new Firebase("https://sensatie.firebaseio.com");
        $scope.authObj = $firebaseAuth(ref);
        $scope.facebook = function() {
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
        $scope.forgot = function() {
            $scope.authObj.$resetPassword({
                email: $scope.user.email
            }).then(function() {
                console.log("Wachtwoord reset is gelukt!");
            }).catch(function(error) {
                console.error("Error: ", error);
            });
        }
        $scope.login = function() {
            $scope.authObj.$authWithPassword({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function(authData) {
                console.log("U bent ingelogd als:", authData);
                $rootScope.check = {};
                $ionicPopup.alert({
                    title: 'U bent succesvol ingelogd',
                });
                var authData = $scope.authObj.$getAuth();
                if (authData) {
                    $rootScope.check.email = authData.password.email; //for ng show
                    console.log("Account, U bent ingelogd als:", $rootScope.check.email);
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });
                    $state.go('app.home'); //switch to home tab
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
//This is the Signup controlller that has the following function: newuser//
.controller('signupCtrl', ["$scope", "$state", "$rootScope", "$ionicPopup", "$firebaseAuth", "$firebase", "$firebaseObject", "$ionicHistory",
        function($scope, $state, $rootScope, $ionicPopup, $firebaseAuth, $firebase, $firebaseObject, $ionicHistory) {
            var isNewUser = true;
            var ref = new Firebase("https://sensatie.firebaseio.com");
            var syncObject = $firebaseObject(ref);
            syncObject.$bindTo($scope, "users");
            ref.onAuth(function(authData) {
                if (authData && isNewUser) {
                    ref.child("users").child(authData.uid).set({
                        email: authData.password.email,
                        name: getName(authData),
                        "competities": {
                            premiereleague: true,
                            primeradivision: true,
                            seriea: true,
                            eredivisie: true,
                            bundesliga: true,
                            primeira: true,
                            lique1: true,
                            champions: true,
                            ek: true
                        }
                    });
                }
            });

            function getName(authData) {
                switch (authData.provider) {
                    case 'password':
                        return authData.password.email.replace(/@.*/, '');
                    case 'facebook':
                        return authData.facebook.displayName;
                }
            }
            $scope.newUser = {};
            var ref = new Firebase("https://sensatie.firebaseio.com");
            $scope.authObj = $firebaseAuth(ref);
            $scope.signup = function() {
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
                    $ionicPopup.alert({
                        title: 'Uw account is aangemaakt en u bent gelijk ingelogd!',

                    });
                    $ionicHistory.nextViewOptions({
                        disableBack: true
                    });

                    var authData = $scope.authObj.$getAuth();
                    if (authData) {
                        $rootScope.check.email = authData.password.email; //for ng show
                        console.log("Account, Logged in as:", $rootScope.check.email);
                        $state.go('app.home'); //switch to account tab
                    } else {
                        console.log("Logged out");
                    }
                }).catch(function(error) {
                    console.error("Error: ", error);
                    //error messages
                    var alertPopup = $ionicPopup.alert({
                        title: 'Er is iets fout gegaan, let op de volgende punten:',
                        subTitle: '-email adress kan in gebruik zijn <br> -een van de velden is niet ingevuld <br> -uw wachtwoord moet minimaal 5 karakters lang zijn',
                        okText: 'Probeer opnieuw',
                    });
                    alertPopup.then(function(res) {
                        console.log('Alert closed');
                    });
                });

            }
        }
    ])
//This is the preference controller that alouds to change the view of competitions//
    .controller('PreferenceCrtl', ["$scope", "$state", "$rootScope", "$ionicPopup", "$firebaseAuth", "$firebase", "$firebaseObject",
        function($scope, $state, $rootScope, $ionicPopup, $firebaseAuth, $firebase, $firebaseObject) {
            var ref = new Firebase("https://sensatie.firebaseio.com");
            var authData = ref.getAuth();
            if (authData) {
                console.log("Authenticated user with uid:", authData.password);
            }
            $scope.authData = authData;
            /*
            		$scope.reloadPage = function(){window.location.reload();}
            */
            $scope.authdata = $firebaseObject(ref.child('users').child(authData.uid));

        }
    ])

//this is the pop up controller that will show the popups 
.controller('PopupCtrl', function($scope, $ionicPopup, $timeout, $firebaseAuth, $firebase, $firebaseObject) {
    var isNewUser = true;
    var ref = new Firebase("https://sensatie.firebaseio.com");

    var authData = $scope.authObj.$getAuth();
    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
        $scope.data = {}

        $scope.forgot = function() {
            $scope.authObj.$resetPassword({
                email: $scope.user.email
            }).then(function() {
                console.log("Wachtwoord reset is gelukt!");
                $scope.rightEmail = 'Er is een email verzonden!';
            }).catch(function(error) {
                console.error("Error: ", error);
                $scope.wrongEmail = 'U heeft geen juist email adress ingevoerd';
            });

            $timeout(function() {

                if ($scope.user.email) {
                    myPopup.close(); //close the popup after 10 seconds for some reason
                }
            }, 1000);

        }

        $scope.resetPassword = function() {
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

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="email" id="inputemail"  ng-model="user.email">' +
                '<button id="buttonemail" class="button ng-binding button-positive" ng-click="forgot();">Stuur Email</button>',
            title: 'Enter uw email adress',
            subTitle: 'U krijgt een email van ons toegestuurd met een nieuw wachtwoord',
            scope: $scope,
            buttons: [{
                    text: 'Cancel'
                }

            ]
        });

    };

})

//this is the HomeCtrl and when u click on a icon there will be a pop up of the club//
.controller('HomeCtrl', function($scope, $ionicPopup, $timeout) {

    $scope.milaanAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'AC-Milaan'
            });
        },
        $scope.arsenalAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Arsenal'
            });
        },
        $scope.altheticoAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Athletico Madrid'
            });
        },
        $scope.romaAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'AS Roma'
            });
        },
        $scope.bayernAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Bayern Munchen'
            });
        },
        $scope.celticAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Celtic'
            });
        },
        $scope.evertonAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Everton'
            });
        },
        $scope.dortmundAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Dortmund'
            });
        },
        $scope.chelseaAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Chelsea'
            });
        },
        $scope.juventusAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Juventus'
            });
        },
        $scope.barcelonaAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Barcelona'
            });
        },
        $scope.valenciaAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Valencia'
            });
        },
        $scope.tottenhamAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Tottenham'
            });
        },
        $scope.leicesterAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Leicester'
            });
        },
        $scope.realmadridAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Real Madrid'
            });
        },
        $scope.southamptonAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Southampton'
            });
        },
        $scope.sevillaAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Sevilla'
            });
        },
        $scope.manchesteruAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Manchester United'
            });
        },
        $scope.manchestercAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Manchester City'
            });
        },
        $scope.parisAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Paris Saint Germain'
            });
        },
        $scope.newcastleAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Newcastle'
            });
        },
        $scope.liverpoolAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Liverpool'
            });
        };

})
//This is the AccountCtrl with the following functions: Resetpassword and logout//
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
        $scope.reset = {};

        $scope.resetPassword = function() {
            $scope.authObj.$changePassword({
                email: $rootScope.check.email,
                oldPassword: $scope.reset.oldPassword,
                newPassword: $scope.reset.newPassword
            }).then(function() {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.go('app.home');
                $ionicPopup.alert({
                    title: 'Uw wachtwoord is succesvol gewijzigd',

                });
                console.log("Password changed successfully!");
            }).catch(function(error) {
                $ionicPopup.alert({
                    title: 'U heeft niet de juiste gegevens ingevoerd',

                });
                console.error("Error: ", error);
            });
        }

        $scope.logout = function() {
            $scope.authObj.$unauth();
            console.log("U bent uitgelogd ");
            document.location.reload(true);
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $rootScope.check.email = null; //for ng show
            $rootScope.check.facebook = null;
            $state.go('app.home');//switch to home tab
            $ionicPopup.alert({
                title: 'U bent succesvol uitgelogd',
                content: '',
            }).then(function(res) {
                console.log('Test Alert Box');
            });
        }
    }
])
//This is the EnglandCtrl this wel get the data of: league, fixtures and team//
.controller('EnglandCtrl', function($scope, engelandApi) {

    engelandApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;

        }),
        engelandApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        engelandApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        engelandApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        engelandApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the SpainCtrl this wel get the data of: league, fixtures and team//
.controller('SpainCtrl', function($scope, spainApi) {

    spainApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        spainApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        spainApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        spainApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        spainApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the ItalyCtrl this wel get the data of: league, fixtures and team//
.controller('ItalyCtrl', function($scope, italyApi) {

    italyApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        italyApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        italyApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        italyApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        italyApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the GermanyCtrl this wel get the data of: league, fixtures and team//
.controller('GermanyCtrl', function($scope, germanyApi) {

        germanyApi.getLeague().success(function(data) {
                $scope.teams = data;
                $scope.league = data.leagueCaption;
            }),
            germanyApi.getFixtures().success(function(data) {
                $scope.isActive = data.fixtures.filter(function(value) {
                    return value.status == "IN_PLAY";
                });
            }),
            germanyApi.getFixtures().success(function(data) {
                $scope.isFinished = data.fixtures.filter(function(value) {
                    return value.status == "FINISHED";
                });
            }),
            germanyApi.getFixtures().success(function(data) {
                $scope.isTimed = data.fixtures.filter(function(value) {
                    return value.status == "TIMED";
                });
            }),
            germanyApi.getTeam().success(function(data) {
                $scope.team = data;
                $scope.loader = true;
            });
})
//This is the DutchCtrl this wel get the data of: league, fixtures and team//
.controller('DutchCtrl', function($scope, dutchApi) {

    dutchApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        dutchApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        dutchApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        dutchApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        dutchApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the FranceCtrl this wel get the data of: league, fixtures and team//
.controller('FranceCtrl', function($scope, franceApi) {

    franceApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        franceApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        franceApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        franceApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        franceApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the PortugalCtrl this wel get the data of: league, fixtures and team//
.controller('PortugalCtrl', function($scope, portugalApi) {

    portugalApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        portugalApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        portugalApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        portugalApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        portugalApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the EnglandCtrl this wel get the data of: league, fixtures and team//
.controller('ChampionsCtrl', function($scope, championsApi) {

    championsApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        championsApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        championsApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        championsApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        championsApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
})
//This is the EUCtrl this wel get the data of: league, fixtures and team//
.controller('EUCtrl', function($scope, euApi) {

    euApi.getLeague().success(function(data) {
            $scope.teams = data;
            $scope.league = data.leagueCaption;
        }),
        euApi.getFixtures().success(function(data) {
            $scope.isActive = data.fixtures.filter(function(value) {
                return value.status == "IN_PLAY";
            });
        }),
        euApi.getFixtures().success(function(data) {
            $scope.isFinished = data.fixtures.filter(function(value) {
                return value.status == "FINISHED";
            });
        }),
        euApi.getFixtures().success(function(data) {
            $scope.isTimed = data.fixtures.filter(function(value) {
                return value.status == "TIMED";
            });
        }),
        euApi.getTeam().success(function(data) {
            $scope.team = data;
            $scope.loader = true;
        });
});
