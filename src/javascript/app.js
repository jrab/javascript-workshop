
var myApp = angular.module('myApp', ['ui.router']);

// configure our routes
myApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		
		// HOME STATES AND NESTED VIEWS ========================================
		.state('home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'mainController'
		})
		
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		.state('about', {
			// we'll get to this in a bit       
		});
		
});


myApp.controller('mainController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

myApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});