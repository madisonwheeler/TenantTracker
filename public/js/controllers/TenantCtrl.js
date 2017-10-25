angular.module('TenantCtrl', []).controller('TenantController', function($scope) {

	$scope.tagline = 'Welcome Home Tenant!';	
	$scope.clickedHome = function(){
		window.location = "/";
	}
});