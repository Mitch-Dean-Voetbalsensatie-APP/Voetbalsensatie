// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.factory('engelandApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

// .factory('engelandfixturesApi', function($http) {

//         return {
//            getTeams: function(){
//               return $http({
//                   url:'http://www.football-data.org/v1/soccerseasons/398/fixtures',
//                   headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
//                   method: 'GET'
//               }).success(function(data){
//                   return data;
//                 });
//            }

//         }
//      })

// .factory('engelandteaminfoApi', function($http) {
//
//         return {
//            getTeam: function(){
//               return $http({
//                   url:'http://www.football-data.org/v1/soccerseasons/398/teams',
//                   headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
//                   method: 'GET'
//               }).success(function(data){
//                   return data;
//                 });
//            }
//
//         }
//      })

.factory('spainApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/399/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/399/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/399/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

.factory('italyApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/401/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/401/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/401/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

.factory('germanyApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/394/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/394/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/394/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

     .factory('portugalApi', function($http) {

             return {
                getLeague: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/402/leagueTable',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },
               getFixtures: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/402/fixtures',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },
                getTeam: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/402/teams',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },

             }
          })

.factory('dutchApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/404/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/404/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/404/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

.factory('franceApi', function($http) {

        return {
           getLeague: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/396/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
          getFixtures: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/396/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/396/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           },

        }
     })

     .factory('championsApi', function($http) {

             return {
                getLeague: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/405/leagueTable',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },
               getFixtures: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/405/fixtures',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },
                getTeam: function(){
                   return $http({
                       url:'http://www.football-data.org/v1/soccerseasons/405/teams',
                       headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                       method: 'GET'
                   }).success(function(data){
                       return data;
                     });
                },

             }
          })

          .factory('euApi', function($http) {

                  return {
                     getLeague: function(){
                        return $http({
                            url:'http://www.football-data.org/v1/soccerseasons/424/leagueTable',
                            headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                            method: 'GET'
                        }).success(function(data){
                            return data;
                          });
                     },
                    getFixtures: function(){
                        return $http({
                            url:'http://www.football-data.org/v1/soccerseasons/424/fixtures',
                            headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                            method: 'GET'
                        }).success(function(data){
                            return data;
                          });
                     },
                     getTeam: function(){
                        return $http({
                            url:'http://www.football-data.org/v1/soccerseasons/424/teams',
                            headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                            method: 'GET'
                        }).success(function(data){
                            return data;
                          });
                     },

                  }
               })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AccountCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
            controller: 'AccountCtrl'
      }
    }
  })

  .state('app.ourTeams', {
    url: '/ourTeams',
    views: {
      'menuContent': {
        templateUrl: 'templates/ourteams.html',
            controller: 'HomeCtrl'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('app.voorkeur', {
    url: '/voorkeur',
    views: {
      'menuContent': {
        templateUrl: 'templates/voorkeur.html',
        controller: 'VoorkeurCrtl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })
  .state('app.competities', {
      url: '/competities',
      views: {
        'menuContent': {
             templateUrl: 'templates/competities.html',

        }
      }
    })


    .state('app.competitieinlog', {
      url: '/competitieinlog',
      views: {
        'menuContent': {
             templateUrl: 'templates/competitieinlog.html',

        }
      }
    })

  .state('app.england', {
      url: '/england',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
			          controller: 'EnglandCtrl'


        }
      }
    })

  .state('app.teaminfo', {
      url: '/teaminfo',
      views: {
        'menuContent': {
             templateUrl: 'templates/teaminfo.html',
			       controller: 'EnglandCtrl'


        }
      }
    })

   .state('app.teaminplay', {
      url: '/teaminplay',
      views: {
        'menuContent': {
             templateUrl: 'templates/teaminplay.html',
			          controller: 'EnglandCtrl'


        }
      }
    })

    .state('app.teamfinished', {
       url: '/teamfinished',
       views: {
         'menuContent': {
              templateUrl: 'templates/teamfinished.html',
                 controller: 'EnglandCtrl'


         }
       }
     })
     .state('app.teamtimed', {
        url: '/teamtimed',
        views: {
          'menuContent': {
               templateUrl: 'templates/teamtimed.html',
                  controller: 'EnglandCtrl'


          }
        }
      })

  .state('app.spain', {
      url: '/spain',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
			             controller: 'SpainCtrl'

        }
      }
    })

    .state('app.teaminfospain', {
        url: '/teaminfospain',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminfo.html',
  			       controller: 'SpainCtrl'


          }
        }
      })

     .state('app.teaminplayspain', {
        url: '/teaminplayspain',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminplay.html',
  			          controller: 'SpainCtrl'


          }
        }
      })

      .state('app.teamfinishedspain', {
         url: '/teamfinishedspain',
         views: {
           'menuContent': {
                templateUrl: 'templates/teamfinished.html',
                   controller: 'SpainCtrl'


           }
         }
       })
       .state('app.teamtimedspain', {
          url: '/teamtimedspain',
          views: {
            'menuContent': {
                 templateUrl: 'templates/teamtimed.html',
                    controller: 'SpainCtrl'


            }
          }
        })

  .state('app.italy', {
      url: '/italy',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
          			controller: 'ItalyCtrl'

        }
      }
    })
    .state('app.teaminfoitaly', {
        url: '/teaminfoitaly',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminfo.html',
               controller: 'ItalyCtrl'


          }
        }
      })

     .state('app.teaminplayitaly', {
        url: '/teaminplayitaly',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminplay.html',
                  controller: 'ItalyCtrl'


          }
        }
      })

      .state('app.teamfinisheditaly', {
         url: '/teamfinisheditaly',
         views: {
           'menuContent': {
                templateUrl: 'templates/teamfinished.html',
                   controller: 'ItalyCtrl'


           }
         }
       })
       .state('app.teamtimeditaly', {
          url: '/teamtimeditaly',
          views: {
            'menuContent': {
                 templateUrl: 'templates/teamtimed.html',
                    controller: 'ItalyCtrl'


            }
          }
        })

  .state('app.germany', {
      url: '/germany',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
          			controller: 'GermanyCtrl'

        }
      }
    })
    .state('app.teaminfogermany', {
        url: '/teaminfogermany',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminfo.html',
               controller: 'GermanyCtrl'


          }
        }
      })

     .state('app.teaminplaygermany', {
        url: '/teaminplaygermany',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminplay.html',
                  controller: 'GermanyCtrl'


          }
        }
      })

      .state('app.teamfinishedgermany', {
         url: '/teamfinishedgermany',
         views: {
           'menuContent': {
                templateUrl: 'templates/teamfinished.html',
                   controller: 'GermanyCtrl'


           }
         }
       })
       .state('app.teamtimedgermany', {
          url: '/teamtimedgermany',
          views: {
            'menuContent': {
                 templateUrl: 'templates/teamtimed.html',
                    controller: 'GermanyCtrl'


            }
          }
        })

  .state('app.dutch', {
      url: '/dutch',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
             controller: 'DutchCtrl'
        }
      }
    })
    .state('app.teaminfodutch', {
        url: '/teaminfodutch',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminfo.html',
               controller: 'DutchCtrl'
          }
        }
      })

     .state('app.teaminplaydutch', {
        url: '/teaminplaydutch',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminplay.html',
               controller: 'DutchCtrl'
          }
        }
      })

      .state('app.teamfinisheddutch', {
         url: '/teamfinisheddutch',
         views: {
           'menuContent': {
                templateUrl: 'templates/teamfinished.html',
                controller: 'DutchCtrl'
           }
         }
       })
       .state('app.teamtimeddutch', {
          url: '/teamtimeddutch',
          views: {
            'menuContent': {
                 templateUrl: 'templates/teamtimed.html',
                 controller: 'DutchCtrl'
            }
          }
        })

  .state('app.france', {
      url: '/france',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
             controller: 'FranceCtrl'
        }
      }
    })
    .state('app.teaminfofrance', {
        url: '/teaminfofrance',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminfo.html',
               controller: 'FranceCtrl'
          }
        }
      })
     .state('app.teaminplayfrance', {
        url: '/teaminplayfrance',
        views: {
          'menuContent': {
               templateUrl: 'templates/teaminplay.html',
               controller: 'FranceCtrl'
          }
        }
      })
      .state('app.teamfinishedfrance', {
         url: '/teamfinishedfrance',
         views: {
           'menuContent': {
                templateUrl: 'templates/teamfinished.html',
                controller: 'FranceCtrl'
           }
         }
       })
       .state('app.teamtimedfrance', {
          url: '/teamtimedfrance',
          views: {
            'menuContent': {
                 templateUrl: 'templates/teamtimed.html',
                 controller: 'FranceCtrl'
            }
          }
        })

        .state('app.portugal', {
            url: '/portugal',
            views: {
              'menuContent': {
                   templateUrl: 'templates/leaguetables.html',
                   controller: 'PortugalCtrl'
              }
            }
          })
        .state('app.teaminfoportugal', {
              url: '/teaminfoportugal',
              views: {
                'menuContent': {
                     templateUrl: 'templates/teaminfo.html',
                     controller: 'PortugalCtrl'
                }
              }
            })
        .state('app.teaminplayportugal', {
              url: '/teaminplayportugal',
              views: {
                'menuContent': {
                     templateUrl: 'templates/teaminplay.html',
                     controller: 'PortugalCtrl'
                }
              }
            })

        .state('app.teamfinishedportugal', {
               url: '/teamfinishedportugal',
               views: {
                 'menuContent': {
                      templateUrl: 'templates/teamfinished.html',
                      controller: 'PortugalCtrl'
                 }
               }
             })
        .state('app.teamtimedportugal', {
                url: '/teamtimedportugal',
                views: {
                  'menuContent': {
                       templateUrl: 'templates/teamtimed.html',
                          controller: 'PortugalCtrl'


                  }
                }
              })
              .state('app.champions', {
                  url: '/champions',
                  views: {
                    'menuContent': {
                         templateUrl: 'templates/leaguetables_ek_champions.html',
                         controller: 'ChampionsCtrl'
                    }
                  }
                })
              .state('app.teaminfochampions', {
                    url: '/teaminfochampions',
                    views: {
                      'menuContent': {
                           templateUrl: 'templates/teaminfo.html',
                           controller: 'ChampionsCtrl'
                      }
                    }
                  })
              .state('app.teaminplaychampions', {
                    url: '/teaminplaychampions',
                    views: {
                      'menuContent': {
                           templateUrl: 'templates/teaminplay.html',
                           controller: 'ChampionsCtrl'
                      }
                    }
                  })

              .state('app.teamfinishedchampions', {
                     url: '/teamfinishedchampions',
                     views: {
                       'menuContent': {
                            templateUrl: 'templates/teamfinished.html',
                            controller: 'ChampionsCtrl'
                       }
                     }
                   })
              .state('app.teamtimedchampions', {
                      url: '/teamtimedchampions',
                      views: {
                        'menuContent': {
                             templateUrl: 'templates/teamtimed.html',
                                controller: 'ChampionsCtrl'


                        }
                      }
                    })
                    .state('app.eu', {
                        url: '/eu',
                        views: {
                          'menuContent': {
                               templateUrl: 'templates/leaguetables_ek_champions.html',
                               controller: 'EUCtrl'
                          }
                        }
                      })
                    .state('app.teaminfoeu', {
                          url: '/teaminfoeu',
                          views: {
                            'menuContent': {
                                 templateUrl: 'templates/teaminfo.html',
                                 controller: 'EUCtrl'
                            }
                          }
                        })
                    .state('app.teaminplayeu', {
                          url: '/teaminplayeu',
                          views: {
                            'menuContent': {
                                 templateUrl: 'templates/teaminplay.html',
                                 controller: 'EUCtrl'
                            }
                          }
                        })

                    .state('app.teamfinishedeu', {
                           url: '/teamfinishedeu',
                           views: {
                             'menuContent': {
                                  templateUrl: 'templates/teamfinished.html',
                                  controller: 'EUCtrl'
                             }
                           }
                         })
                    .state('app.teamtimedeu', {
                            url: '/teamtimedeu',
                            views: {
                              'menuContent': {
                                   templateUrl: 'templates/teamtimed.html',
                                      controller: 'EUCtrl'


                              }
                            }
                          })

  .state('app.englandoptions', {
      url: '/englandoptions',
      views: {
        'menuContent': {
             templateUrl: 'templates/englandoptions.html',

        }
      }
    })
    .state('app.italyoptions', {
        url: '/italyoptions',
        views: {
          'menuContent': {
               templateUrl: 'templates/italyoptions.html',

          }
        }
      })

    .state('app.spainoptions', {
          url: '/spainoptions',
          views: {
            'menuContent': {
                 templateUrl: 'templates/spainoptions.html',

            }
          }
        })
    .state('app.germanyoptions', {
          url: '/germanyoptions',
          views: {
            'menuContent': {
                  templateUrl: 'templates/germanyoptions.html',

            }
          }
        })
        .state('app.dutchoptions', {
              url: '/dutchoptions',
              views: {
                'menuContent': {
                      templateUrl: 'templates/dutchoptions.html',

                }
              }
            })
            .state('app.franceoptions', {
                  url: '/franceoptions',
                  views: {
                    'menuContent': {
                          templateUrl: 'templates/franceoptions.html',

                    }
                  }
                })

                .state('app.portugaloptions', {
                      url: '/portugaloptions',
                      views: {
                        'menuContent': {
                              templateUrl: 'templates/portugaloptions.html',

                        }
                      }
                    })

            .state('app.championsoptions', {
                  url: '/championsoptions',
                  views: {
                  'menuContent': {
                      templateUrl: 'templates/championsoptions.html',

                  }
                }
              })

              .state('app.euoptions', {
                    url: '/euoptions',
                    views: {
                    'menuContent': {
                        templateUrl: 'templates/euoptions.html',

                    }
                  }
                })


   .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
        }
      }
    })



 .state('app.404', {
      url: '/404',
      views: {
        'menuContent': {
          templateUrl: 'templates/404.html',
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
