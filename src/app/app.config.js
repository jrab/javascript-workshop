/**
 * Load modules for application
 */

angular.module('bhApp', [
		'ui.router',
		'bhApp.listingServices',
		'bhApp.detailServices'])
	.constant('CONFIG', {
		DebugMode: true,
		StepCounter: 0,
		APIHost: 'http://localhost:3000'
	}); 