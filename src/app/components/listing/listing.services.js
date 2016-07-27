(function () {
	'use strict';

	angular.module('bhApp.userServices', [])
		.service('userService', userService);

	userService.$inject = ['$http', '$q', '_'];

	function userService($http, $q, _) {

		var factory = {
			//properties
			getUserList: getUserList,
			getUser: getUser,
			data: []
		};

		function getUserList() {

			var defer = $q.defer();

			if (factory.data && factory.data.status == "success") {

				defer.resolve(factory.data);

			} else {


				$http.get('data/users.json')
					.then(function successCallback(response) {
						factory.data = response.data;
						defer.resolve(response.data);
					}, function errorCallback(response) {
						defer.reject(response);
					});
			}

			return defer.promise;
		};

		function getUser(id) {

			var defer = $q.defer();

			factory.getUserList().then(function (data) {

				var users = data.users,
					user = _.findWhere(users, {id: id});

				defer.resolve(user);
			});

			return defer.promise;

		}

		return factory;
	}

})();