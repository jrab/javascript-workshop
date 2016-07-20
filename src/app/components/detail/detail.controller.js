(function () {
	'use strict';

	angular.module('bhApp')
		.controller('detailController', detailController);

	detailController.$inject = ["$scope", "$http", "$window", "$q", "$state"];

	function detailController($scope, $http, $window, $q, $state) {

		var vm = this;

		return vm;
	}	
})();