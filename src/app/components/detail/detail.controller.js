(function () {
	'use strict';

	angular.module('bhApp')
		.controller('detailController', detailController);

	detailController.$inject = ["$scope", "$http", "$window", "$q", "detailService"];

	function detailController($scope, $http, $window, $q, detailService) {

		var vm = this;

		//services
		vm.bhAppDetailService = detailService;

		// real ajax calls
		detailService.getProductData()
			.then(function (data) {

				vm.item = data;

			}, function (error) {
				
				//handle error
			});

		return vm;
	}
})();