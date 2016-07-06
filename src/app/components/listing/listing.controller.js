(function () {
	'use strict';

	angular.module('bhApp')
		.controller('listingController', listingController);

	listingController.$inject = ["$scope", "$http", "$window", "$q", "listingService"];

	function listingController($scope, $http, $window, $q, listingService) {

		var vm = this;

		//services
		vm.bhAppListingService = listingService;

		// real ajax calls
		listingService.getListingData()
			.then(function (data) {

				vm.items = data.items;

			}, function (error) {
				
				//handle error
			});

		return vm;
	}
})();