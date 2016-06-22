
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'partials/home.html',
			controller  : 'mainController'
		});
});

myApp.controller('mainController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';
});