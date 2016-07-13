(function () {
	'use strict';

	angular.module('bhApp')
		.controller('listingController', listingController);

	listingController.$inject = ["$scope", "$http", "$window", "$q", "listingService"];

	function listingController($scope, $http, $window, $q, listingService) {

		var vm = this;

		// real ajax calls
		listingService.getListingData()
			.then(function (data) {

				vm.items = data.items;

			}, function (error) {
				
				//handle error
			});

		vm.message = "Test Message";

		vm.goToDetail = function (sku, itemSource) {

			$state.go('detail', sku, itemSource);
		};

		return vm;
	}	
})();