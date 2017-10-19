angular.module('LandlordCtrl', []).controller('LandlordController', function($scope) {

	$scope.tagline = 'Welcome Landlord!';
	$scope.clickedHome = function(){
		window.location = "/";
	}
});