(function() {

	var modulo = angular.module('appModule');

	modulo.controller('RegionController', function($scope, config, $rootScope, regionService, $location) {

		$scope.tree_data = [];


		$scope.list = function() {


			regionService.list(function(data)){
				$scope.tree_data = data;
			}, function(error){
				console.log(error);
			});
	

		};

	});

})();