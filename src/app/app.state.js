
angular.module('bhApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('', '/');
	// use a state provider for routing

	$stateProvider
		.state('listing', {
			url: '/',
			templateUrl: 'partials/listing/views/listing.view.html',
			controller: 'listingController',
			controllerAs: 'listing'
		})
		.state('detail', {
			url: '/detail',
			templateUrl: 'partials/detail/views/detail.view.html',
			controller: 'detailController',
			controllerAs: 'detail'
		})
}]);