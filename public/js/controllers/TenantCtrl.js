angular.module('TenantCtrl', []).controller('TenantController', function($scope) {
	
	$scope.clickedHome = function(){
		window.location = "/";
	}
});
