angular.module('MainCtrl', []).controller('MainController', function($scope) {

	// FUNCTIONS =================================================================
	// Changes view to the landlord login page
	$scope.clickedLandlord = function(){
       window.location = "/landlordLogin";
   	}
	// Changes view to the tenant login page
   	$scope.clickedTenant = function(){
   		window.location = "/tenantLogin";
   	}
   	//Changes view to the lanlord sign up page
   	$scope.clickedLandlordR = function(){
       window.location = "/landlordSignUp";
   	}
   	
   	//Changes view to the lanlord sign up page
   	$scope.clickedTenantR = function(){
       window.location = "/tenantSignUp";
   	}

});
