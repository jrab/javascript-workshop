(function () {
	'use strict';

	angular.module('bhApp')
		.controller('detailController', detailController);

	detailController.$inject = ["$scope", "$http", "$window", "$q", "$state", "detailService"];

	function detailController($scope, $http, $window, $q, $state, detailService) {

		var vm = this,
			sku = $state.params.sku,
			itemSource = $state.params.itemSource;

		// real ajax calls
		detailService.getProductData(sku, itemSource)
			.then(function (data) {

				vm.item = data;

			}, function (error) {
				
				//handle error
			});

		return vm;
	}	
})();