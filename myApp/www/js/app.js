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

.factory('engelandApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('engelandteaminfoApi', function($http) {
    
        return {
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/teams',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })


.factory('engelandfixturesApi', function($http) {
    
        return {
           getTeam: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/398/fixtures',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('spainApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/399/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('italyApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/401/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('germanyApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/394/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('dutchApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/404/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
                  method: 'GET'
              }).success(function(data){
                  return data;
                });
           }       
          
        }
     })

.factory('franceApi', function($http) {
    
        return {
           getTeams: function(){
              return $http({
                  url:'http://www.football-data.org/v1/soccerseasons/396/leagueTable',
                  headers: { 'X-Auth-Token': '68e5abb8860b467dba8e4c28f41ab20c' },
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
			          controller: 'engelandteaminfoApi'

          
        }
      }
    })
  
   .state('app.teamfixtures', {
      url: '/teamfixtures',
      views: {
        'menuContent': {
             templateUrl: 'templates/teamfixtures.html',
			          controller: 'engelandfixturesApi'

          
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
  
.state('app.spainoptions', {
      url: '/spainoptions',
      views: {
        'menuContent': {
             templateUrl: 'templates/spainoptions.html',
          
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

  .state('app.germany', {
      url: '/germany',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
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

  .state('app.france', {
      url: '/france',
      views: {
        'menuContent': {
             templateUrl: 'templates/leaguetables.html',
                    			controller: 'FranceCtrl'

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




