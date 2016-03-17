
angular.module('starter.controllers', [])

.controller('EnglandCtrl', function($scope,engelandApi) {
  
  engelandApi.getTeams().success(function(data){
    $scope.teams=data;
	$scope.league=data.leagueCaption;
   
  });
  
})

.controller('engelandteaminfoApi', function($scope,engelandteaminfoApi) {
  engelandteaminfoApi.getTeam().success(function(data){
    $scope.teams=data;
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
     });
  
})

.controller('ItalyCtrl', function($scope,italyApi) {
  
  italyApi.getTeams().success(function(data){
    $scope.teams=data;
	  $scope.league=data.leagueCaption;
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


