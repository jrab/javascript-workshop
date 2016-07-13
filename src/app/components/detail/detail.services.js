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

		function getProductData(sku, itemSource) {

			var defer = $q.defer();
			$http.get('data/product-listing.json')
				.then(function successCallback(response) {

					var items = response.data.items,
						item = _.findWhere(items, {skuNo: sku, itemSource: itemSource});

					defer.resolve(item);
					
				}, function errorCallback(response) {
					defer.reject(response);
				});

			return defer.promise;
		}

		return factory;
	}

})();