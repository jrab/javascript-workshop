/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('bhApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// any unknown URLS go to 404
	$urlRouterProvider.otherwise('/404');
	// no route goes to index
	$urlRouterProvider.when('', '/');
	// use a state provider for routing

	$stateProvider
		.state('listing', {
			url: '/',
			templateUrl: 'partials/listing/views/listing.view.html',
			controller: "listingController",
			controllerAs: 'ctrl'
		})
		.state('detail', {
			// we'll add another state soon
			url: '/detail',
			templateUrl: 'partials/detail/views/detail.view.html',
			controller: 'detailController',
			controllerAs: 'ctrl'
		});
}]);