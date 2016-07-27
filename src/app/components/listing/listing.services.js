(function () {
	'use strict';

	angular.module('bhApp.userServices', [])
		.service('userService', userService);

	userService.$inject = ['$http', '$q'];

	function userService($http, $q) {

		var factory = {
			//properties
			getUserList: getUserList
		};

		function getUserList() {

			var defer = $q.defer();

			$http.get('data/users.json')
				.then(function successCallback(response) {
					defer.resolve(response.data);
				}, function errorCallback(response) {
					defer.reject(response);
				});

			return defer.promise;
		}

		return factory;
	}

})();