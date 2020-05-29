angular.module('app').controller('usersController',
	['$scope', 'userService', function ($scope, userService) {
		'use strict';

		$scope.users = userService.getUsers();

}]);
