(function () {
	'use strict';

	angular.module('bhApp')
		.controller('listingController', listingController);

	listingController.$inject = ["$scope", "$http", "$window", "$q", "$state", "userService"];

	function listingController($scope, $http, $window, $q, $state, userService) {

		var vm = this;

		// real ajax calls
		userService.getUserList()
			.then(function (data) {

				vm.users = data.users;

			}, function (error) {
				
				//handle error
			});

		vm.goToDetail = function (item) {

		};

		return vm;
	}	
})();