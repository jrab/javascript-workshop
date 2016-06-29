
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/listing');

	$stateProvider
		.state('listing', {
			url: '/listing',
			templateUrl : 'partials/listing.html',
			controller  : 'listingController'
		})
		.state('detail', {
			url: '/detail',
			templateUrl : 'partials/detail.html',
			controller  : 'detailController'
		})
});

myApp.service('listingService', function ($http) {

	return {
		async: function() {
			return $http.get('data/product-listing.json');  //1. this returns promise
		}
	};
});

myApp.controller('listingController', function($scope, listingService) {

	$scope.items = [];

	listingService.async().then(function (data) {

		$scope.items = data.data.items;
	});

	$scope.message = "Welcome to the listing page";
});

myApp.controller('detailController', function($scope) {

	$scope.message = "Welcome to the detail page.";
});

