angular.module('LandlordCtrl', []).controller('LandlordController', function($rootScope, $scope, $http, $location, $sessionStorage) {
	$scope.tagline = 'Welcome Landlord!';
	$scope.clickedHome = function(){
		window.location = "/";
	}

	$scope.property = {};

	console.log(http({url:'/api/landlord/tenants', method:'POST', data: {'landlord_id': $sessionStorage.currentUser.id}}));


	$http({url:'/api/landlord/tenants', method:'POST', data: {'landlord_id': $rootScope.currentUser.id}}).then(function(response) {
    	console.log("Tenants: ");
        console.log(response);
        if(response.data != null){
            $scope.property.tenants = response.data;
        }
    });

	$http({url:'/api/landlord/property', method:'POST', data: {'landlord_id': $rootScope.currentUser.id}}).then(function(response) {
		console.log("Property: ");
        console.log(response);
        if(response.data != null){
            $scope.property.address = response.data.address;
        }
    });

    // $http({url:'/api/landlord/applianceCount', method:'POST', data: {'property_id': $rootScope.currentUser.property_id }}).then(function(response) {
    // 	console.log("ApplianceCount: ");
    //     console.log(response);
    //     if(response.data != null){
    //         $scope.property.applianceCount = response.data;
    //     }
    // });


    $scope.toAppPage = function() {
    	$location.path("/appliances");
    }

});
