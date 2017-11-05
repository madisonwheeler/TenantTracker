angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.clickedLandlord = function(){
       window.location = "/landlordLogin";
   	}

   	$scope.clickedTenant = function(){
   		window.location = "/tenantLogin";
   	}

});