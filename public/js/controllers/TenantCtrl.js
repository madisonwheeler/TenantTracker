angular.module('TenantCtrl', []).controller('TenantController', function($sessionStorage, $scope, $http, $location) {
	// VARIABLES =================================================================
	$scope.name = $sessionStorage.currentUser.name;

  // FUNCTIONS =================================================================
	// changes view to Home page
	$scope.clickedHome = function(){
		window.location = "/";
	};

	// API call to populate the current property information
	$http({url: '/api/tenant/property', method:'POST', data: {'property_id': $sessionStorage.currentUser.property_id}}).then(function(response) {
		// console.log("Property " + response);
		if(response.data != null){
			$scope.property = response.data;
		}
	});
	
	// API call to populate the current property's landlord information
	$http({url: '/api/tenant/landlord', method:'POST', data: {'landlord_id': $sessionStorage.currentUser.landlord_id}}).then(function(response) {
		// console.log("Landlord " + response);
		if(response.data != null){
			$scope.landlord = response.data;
		}
	});

});
