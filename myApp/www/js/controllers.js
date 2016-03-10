
angular.module('starter.controllers', [])



.controller('MainCtrl', function($scope,voetbalsensatieApi) {
  
  voetbalsensatieApi.getTeams().success(function(data){
    $scope.teams=data;
    console.log($scope.teams)
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
