angular.module('app').controller('rolesController',


  ['$scope', 'roleService', function ($scope, roleService) {
		'use strict';

		$scope.roles = roleService.getRoles();



}]);
