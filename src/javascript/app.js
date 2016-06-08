var weatherApp = angular.module('studentApp', []);

weatherApp
	.service('studentService', function () {

		this.students = [ { firstName: 'Jada', lastName: 'Bayless', age: 21 },
							{ firstName: 'Suzette', lastName: 'Paddock', age: 19 },
							{ firstName: 'Christopher', lastName: 'Schweitzer', age: 25 },
							{ firstName: 'Melvin', lastName: 'Vice', age: 23 },
							{ firstName: 'Cierra', lastName: 'Derr', age: 18 },
							{ firstName: 'Taina', lastName: 'Mcentee', age: 22 },
							{ firstName: 'Gertrud', lastName: 'Camden', age: 24 },
							{ firstName: 'Luvenia', lastName: 'Polizzi', age: 20 },
							{ firstName: 'Elizbeth', lastName: 'Lepore', age: 21 },
							{ firstName: 'Colette', lastName: 'Goode', age: 19 },
							{ firstName: 'Gertha', lastName: 'Musante', age: 25 },
							{ firstName: 'Claudine', lastName: 'Sidhu', age: 23 },
							{ firstName: 'Rafael', lastName: 'Fussell', age: 18 },
							{ firstName: 'Mi', lastName: 'Gillan', age: 22 },
							{ firstName: 'Golda', lastName: 'Mansfield', age: 24 },
							{ firstName: 'Janett', lastName: 'Mumm', age: 20 },
							{ firstName: 'Joane', lastName: 'Demelo', age: 21 },
							{ firstName: 'Hilde', lastName: 'Deltoro', age: 19 },
							{ firstName: 'Roland', lastName: 'Dawson', age: 25 },
							{ firstName: 'Valorie', lastName: 'Mcnichol', age: 23 } ];

		this.getStudent = function (index) {

			if (index)
				return this.students[index];
			else
				return this.students[0];
		};

		this.getStudents = function () {

			return this.students;
		}
	});

weatherApp
	.controller('studentController', function ($scope, studentService) {
	
		$scope.student = studentService.getStudent(15);
	})
	.directive('student', function () {

		return {

			restrict: 'E',
			templateUrl: 'partials/student.html'
		}
	});

weatherApp
	.controller('studentListController', function ($scope, studentService) {
	
		$scope.students = studentService.getStudents();
	})
	.directive('students', function () {

		return {

			restrict: 'E',
			templateUrl: 'partials/studentList.html'
		}
	});


	