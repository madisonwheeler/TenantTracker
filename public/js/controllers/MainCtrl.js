angular.module('MainCtrl', []).controller('MainController', function($scope) {
	// go to landlord login page
	$scope.clickedLandlord = function(){
       window.location = "/landlordLogin";
   	}
	// go to tenant login page
   	$scope.clickedTenant = function(){
   		window.location = "/tenantLogin";
   	}

});
