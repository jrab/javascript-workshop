(function () {
	'use strict';

	angular.module('bhApp')
		.controller('detailController', detailController);

	detailController.$inject = ["$scope", "$http", "$window", "$q", "detailService"];

	function detailController($scope, $http, $window, $q, detailService) {

		var vm = this;

		// real ajax calls
		detailService.getProductData(sku, itemSource)
			.then(function (data) {

				vm.item = data;

			}, function (error) {
				
				//handle error
			});

		vm.message = "Test Message";

		return vm;
	}	
})();