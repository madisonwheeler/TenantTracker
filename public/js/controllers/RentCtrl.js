angular.module('RentCtrl', []).controller('RentController', function($rootScope, $scope, $http) {

	// VARIABLES =================================================================
	$scope.rentHistory = [];

	// FUNCTIONS =================================================================
	// loads the rent history onto the page with API call
	$scope.loadRentTable = function() {
		// console.log('rent table loaded');
		$http({url:'/api/rent', method:'POST', data: {'property_id': $rootScope.currentUser.property_id }}).then(function(response) {
	    	// console.log("Rent: ");
	        // console.log(response.data);
	        if(response.data != null){
	            $scope.rentHistory = response.data;
	        }
	    });
	};

	// updates tenant rent history for this date
	$scope.sendRent = function($event) {
		console.log($event);
		$http({url:'/api/rent/send', method:'POST', data: {'rent_id': $event.currentTarget.value }}).then(function(response) {
	    	$scope.loadRentTable();
	    });
	};

	$scope.receiveRent = function($event) {
		console.log($event);
		$http({url:'/api/rent/receive', method:'POST', data: {'rent_id': $event.currentTarget.value }}).then(function(response) {
	    	$scope.loadRentTable();
	    });
	};

});
