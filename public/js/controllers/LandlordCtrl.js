angular.module('LandlordCtrl', []).controller('LandlordController', function($sessionStorage, $scope, $http, $location) {
	// VARIABLES =================================================================
	$scope.tagline = 'Welcome Landlord!';
	$scope.property = {};
	// FUNCTIONS =================================================================

	// API call to load the Tenants of the current property
	$http({url:'/api/landlord/tenants', method:'POST', data: {'landlord_id': $sessionStorage.currentUser.id}}).then(function(response) {
    	// console.log("Tenants: ");
      //   console.log(response);
        if(response.data != null){
            $scope.property.tenants = response.data;
        }
    });

	// API call to load the address of the current property
	$http({url:'/api/landlord/property', method:'POST', data: {'landlord_id': $sessionStorage.currentUser.id}}).then(function(response) {
		// console.log("Property: ");
    //     console.log(response);
        if(response.data != null){
            $scope.property.address = response.data.address;
        }
    });

	// Changes the view to the appliances page
    $scope.toAppPage = function() {
    	$location.path("/appliances");
    }

	// Changes the view to the home page
	$scope.clickedHome = function(){
		window.location = "/";
	}
});
