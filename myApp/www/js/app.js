// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

.factory('voetbalsensatieApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/alpha/soccerseasons/398/leagueTable',
                  headers: { 'X-Auth-Token': '613a6b6937394ae8a94d69f358f76902' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
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
  
  .state('app.england', {
      url: '/england',
      views: {
        'menuContent': {
             templateUrl: 'templates/england.html',
          
        }
      }
    })

  .state('app.spain', {
      url: '/spain',
      views: {
        'menuContent': {
             templateUrl: 'templates/spain.html',
          
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
  
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
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
    })
  
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});


function MyCtrl($scope, $ionicTabsDelegate) {
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }
}


