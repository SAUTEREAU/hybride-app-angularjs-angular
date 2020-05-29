var globalModules = [
	'ui.router',
	'oc.lazyLoad',
	'ui.bootstrap'
];

angular.module('app', globalModules)
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/angularjs/navBar.html'
			})
			.state('home.users', {
				url: 'users',
				templateUrl: '/angularjs/users/users.template.html',
				controller: 'usersController',
				resolve: {
					lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							['/angularjs/users/users.controller.js',
								"/angularjs/services/user.service.js"]);
					}]
				}
			})
			.state('home.roles', {
				url: 'roles',
				templateUrl: '/angularjs/roles/roles.template.html',
				controller: 'rolesController',
				resolve: {
					lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load(
							['/angularjs/roles/roles.controller.js',
								"/angularjs/services/user.service.js"]);
					}]
				}
			});
		$urlRouterProvider.otherwise("/");
	}]);
