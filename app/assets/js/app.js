angular.module('firstApp', [])
	.controller("firstAppController", function($scope) {
		$scope.description = "a simple angular app";
	})
	.directive("firstappdirective", function() {
		return {
			restrict: "A",
			templateUrl: "./partials/firstInclude.html"
		}
	});
;