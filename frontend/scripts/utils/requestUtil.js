(function(){

	var modulo = angular.module('appModule');

	modulo.service('requestUtil', function($http, $rootScope) {
		
		service.get = function(url, success, error) {

			return $http.get(url)
				.success(function(data){

					if(success) {
						success.call(null, data);
					}

				})
				.error(function(data){

					if(error) {
						error.call(null, data);
					}

				});

		};

		return service;

	});

})();