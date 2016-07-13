(function () {
	'use strict';

	angular.module('bhApp.listingServices', [])
		.service('fetchDataService', fetchDataService);

	fetchDataService.$inject = ['$http', '$q'];

	function fetchDataService($http, $q) {

		var factory = {
			//properties
			getListingData: getListingData
		};

		function getListingData() {

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