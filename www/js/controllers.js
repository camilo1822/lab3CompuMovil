angular.module('starter.controllers', ['ngCordova'])

.controller('lugaresCtrl', ['$scope','lugaresService',function($scope,lugaresService){

//Inicializando lugares
$scope.lugares = [];
	var lugar= 'Medellin';
	$scope.prueba='panplona';
  lugaresService.getAll(lugar).then(function(response){
    console.info(response.data);
    console.log(response.data);
    $scope.lugares = response.data;

  })

	
}]);