(function () {
	'use strict';

	angular.module('bhApp.detailServices', [])
		.service('detailService', detailService);

	detailService.$inject = ['$http', '$q'];

	function detailService($http, $q) {

		var factory = {
			//properties
			detailData: [],
			getProductData: getProductData
		};

		function getProductData(columnum) {

			var defer = $q.defer()

			$http.get('data/product-detail.json')
				.then(function successCallback(response) {
					defer.resolve(response.data);
				}, function errorCallback(response) {
					defer.reject(response);
				});

			return defer.promise
		}

		return factory;
	}
})();