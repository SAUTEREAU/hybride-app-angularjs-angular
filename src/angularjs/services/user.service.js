angular.module('app').service('userService', ['iUserService', function (iUserService) {
	'use strict';

	let users = [
	  'Jean',
    'Laura',
    'Guillaume',
    'Camille'
  ];

  this.createUser = function(user) {
    users.push(user);
  }

	this.getUsers = function() {
	  return users;
  }

  iUserService.getUsers = this.getUsers;

}]);
