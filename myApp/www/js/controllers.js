
angular.module('starter.controllers', [])

.controller('EnglandCtrl', function($scope,engelandApi) {
  
  engelandApi.getTeams().success(function(data){
    $scope.teams=data;
	$scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('SpainCtrl', function($scope,spainApi) {
  
  spainApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('ItalyCtrl', function($scope,italyApi) {
  
  italyApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('GermanyCtrl', function($scope,germanyApi) {
  
  germanyApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('DutchCtrl', function($scope,dutchApi) {
  
  dutchApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('FranceCtrl', function($scope,franceApi) {
  
  franceApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
    console.log($scope.teams)
    console.log($scope.points)
    console.log($scope.crestUrl)
  });
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('FirstCtrl', function($scope) {
    $scope.title = 'Title1';
    $scope.subheader = 'Subheader1';
    $scope.items = [{name:'Yes', ref:'state2'},{name:'No', ref:'column-chart'}]
})
.controller('SecondCtrl', ['$scope', function ($scope) {
    $scope.title = 'Title2';
    $scope.subheader = 'Subheader2';
    $scope.items = [{name:'name1', ref:'state1'},{name:'name2', ref:'ref2'}];
}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
