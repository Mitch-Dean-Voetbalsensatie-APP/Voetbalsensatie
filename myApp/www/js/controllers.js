
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

.controller('engelandteaminfoApi', function($scope,engelandteaminfoApi) {
  engelandteaminfoApi.getTeam().success(function(data){
    $scope.teams=data;
    console.log($scope.name)
    console.log($scope.code)
  });
  
})

.controller('engelandfixturesApi', function($scope,engelandfixturesApi) {
  engelandfixturesApi.getTeam().success(function(data){

	$scope.isActive = data.fixtures.filter(function(value) {
		return value.status !== "FINISHED";
	});
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




.controller('PlaylistCtrl', function($scope, $stateParams) {
});
