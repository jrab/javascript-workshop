(function () {
	'use strict';

	angular.module('bhApp.detailServices', [])
		.service('detailService', detailService);

	detailService.$inject = ['$http', '$q'];

	function detailService($http, $q) {

		var factory = {
			//properties
			getProductData: getProductData
		};

		function getProductData(sku, itemSource) {

			var defer = $q.defer();

			$http.get('data/product-listing.json')
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