(function() {

	var modulo = angular.module('appModule');

	modulo.service('regionService', function(requestUtil, config) {

		var service = {};

		service.list = function(successCallback, errorCallback) {

			requestUtil.get("http://localhost:3000/" + "region", successCallback, errorCallback);

		};

		return service;
	});

})();