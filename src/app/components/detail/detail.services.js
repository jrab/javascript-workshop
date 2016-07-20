(function () {
	'use strict';

	angular.module('bhApp.userDetailServices', [])
		.service('userDetailService', userDetailService);

	userDetailService.$inject = ['$http', '$q', '_'];

	function userDetailService($http, $q, _) {

		var factory = {
			//properties
			
		};

		return factory;
	}

})();