(function () {
	'use strict';

	angular.module('bhApp')
		.controller('listingController', listingController);

	listingController.$inject = ["$scope", "$http", "$window", "$q", "$state", "fetchDataService"];

	function listingController($scope, $http, $window, $q, $state, fetchDataService) {

		var vm = this;

		// real ajax calls
		fetchDataService.getListingData()
			.then(function (data) {

				vm.items = data.items;

			}, function (error) {
				
				//handle error
			});

		vm.message = "Test Message";

		vm.goToDetail = function (item) {
			
			var sku = item.skuNo,
				itemSource = item.itemSource,
				params = { sku: sku, itemSource: itemSource };

			$state.go('detail/' + sku + '/' + itemSource, params);
		};

		return vm;
	}	
})();