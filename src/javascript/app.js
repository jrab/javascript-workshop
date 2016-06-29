
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl : 'partials/home.html',
			controller  : 'homeController'
		})
		.state('home.projects', {
			url: '/projects',
			templateUrl : 'partials/home/list.html',
			controller  : 'homeController.projects'
		})
		.state('home.summary', {
			url: '/summary',
			templateUrl : 'partials/home/paragraph.html'
		})
		.state('about', {
			url: '/about',
			views: {
				'' : {
					templateUrl : 'partials/about.html',
					controller  : 'aboutController'
				},
				'summary@about' : {
					templateUrl : 'partials/about/summary.html',
					controller  : 'aboutController.summary'
				},
				'skills@about' : {
					templateUrl : 'partials/about/skills.html',
					controller  : 'aboutController.skills'
				}
			}
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

myApp.controller('homeController.projects', function($scope) {

	$scope.projects = ["Workshop", "Pegasus", "Marshmallow", "Nugget", "Zeus"];
});

myApp.controller('aboutController', function($scope) {

	$scope.message = "Something about us.";
});

myApp.controller('aboutController.summary', function($scope) {

	$scope.summary = "I am a devloper who lives in the tri-state area. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
});

myApp.controller('aboutController.skills', function($scope) {

	$scope.skills = ["Programming", "Improvising", "Teaching", "Motorcycling"];
});

myApp.controller('contactController', function($scope) {

	$scope.message = "Contact me at jrabcs@bhphoto.com";
});


