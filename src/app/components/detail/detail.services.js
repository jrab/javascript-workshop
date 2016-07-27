(function () {
	'use strict';

	angular.module('bhApp.detailServices', [])
		.service('detailService', detailService);

	detailService.$inject = ['$http', '$q', '_'];

	function detailService($http, $q, _) {

		var factory = {
			//properties
			getProductData: getProductData
		};

		function getProductData(id) {

			var defer = $q.defer();
			$http.get('data/users.json')
				.then(function successCallback(response) {

					var users = response.data.users,
						user = _.findWhere(users, {id: id});

					defer.resolve(user);
					
				}, function errorCallback(response) {
					defer.reject(response);
				});

			return defer.promise;
		}

		return factory;
	}

})();