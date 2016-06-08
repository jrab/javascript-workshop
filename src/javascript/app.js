var weatherApp = angular.module('weatherApp', []);

weatherApp
	.service('weatherService', function () {

		this.getWeather = function (cityName) {

			return '40';
		}
	})
	.controller('weatherAppController', function ($scope, weatherService) {
		
		$scope.description = 'Test';
		$scope.temp = weatherService.getWeather('Manhattan');
	})
	.directive('weather', function () {

		return {

			restrict: 'E',
			templateUrl: 'partials/weather.html'
		}
	});