angular.module('starter.service', [])
.service('lugaresService', ['$http',function($http){
	var base = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var base2 = ',co&appid=5835de12355598da5e960824e745b634'
    this.getAll=function (lugar) {
            return $http.get(base + lugar + base2);
        };
}]);