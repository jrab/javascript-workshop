
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl : 'partials/home.html',
			controller  : 'homeController'
		})
		.state('about', {
			url: '/about',
			templateUrl : 'partials/about.html',
			controller  : 'aboutController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl : 'partials/contact.html',
			controller  : 'contactController'
		});
});

myApp.controller('homeController', function($scope) {

	$scope.message = "Welcome to the home page";
});

myApp.controller('aboutController', function($scope) {

	$scope.message = "Something about us.";
});

myApp.controller('contactController', function($scope) {

	$scope.message = "Contact me at jrabcs@bhphoto.com";
});


