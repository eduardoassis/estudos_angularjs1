var exports = {};
var app = exports;

(function($) {

	var modulo = angular.module('appModule', ['ngRoute']);

	modulo.config(['$routeProvider', '$httpProvider',

		function($routeProvider, $httpProvider){

			$routeProvider

				.when('/home', {
					templateUrl: 'views/index.html',
					controller: 'AppCtrl'

				})
				.otherwise({
					redirectTo: '/',
					templateUrl: 'login.html',
					controller: 'LoginController'
				});

		}

	]);

})();