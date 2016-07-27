(function () {
	'use strict';

	angular.module('bhApp')
		.controller('detailController', detailController);

	detailController.$inject = ["$scope", "$http", "$window", "$q", "$state", "userservice"];

	function detailController($scope, $http, $window, $q, $state, userService) {

		var vm = this;

		return vm;
	}	
})();