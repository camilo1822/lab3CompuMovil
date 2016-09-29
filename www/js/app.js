//angular.module('starter', ['ionic','starter.controllers','starter.services'])
angular.module('starter', ['ionic'])

.controller('lugaresCtrl', ['$scope','lugaresService','$interval',function($scope,lugaresService,$interval){
$scope.ingresado;
  var decreamentCountdown=function()
  {
   $scope.countdown -=1;
   if($scope.countdown<1)
  {
   $scope.countdown=10;
   
  startCountDown();
  }
  };
  var startCountDown=function()
  {
     $interval(decreamentCountdown,1000,$scope.countdown)
  };
  $scope.countdown=10;
  startCountDown();


  $scope.cambio = function(Ciudad){
    $scope.plan = Ciudad;
    $scope.lugares = [];
    
    $scope.date = new Date();
    lugaresService.getAll(Ciudad).then(function(response){
        $scope.lugares = response.data;
      })
    }
  
}])

.service('lugaresService', ['$http',function($http){
  var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var base2 = ',co&appid=5835de12355598da5e960824e745b634'
    this.getAll=function (lugar) {
            return $http.get(base + lugar + base2);
        };
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})