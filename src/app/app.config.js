var underscore = angular.module('underscore', []);

underscore.factory('_', ['$window', function($window) {
	return $window._;
}]);

var bhApp = angular
				.module('bhApp', 
						['ui.router', 'bhApp.userServices', 'underscore']);