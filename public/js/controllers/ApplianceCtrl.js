angular.module('ApplianceCtrl', []).controller('ApplianceController', function($sessionStorage, $scope, $http, LoginService) {
	// VARIABLES =================================================================
	$scope.repairRequested = false;
	$scope.reqRepairButton = true;
	$scope.needsRepairButton = false;
	$scope.successMsg = false;
	$scope.repairDesc = "";
	$scope.appliances = [];


	// FUNCTIONS =================================================================
	// load appliances onto page
	$scope.loadAppliances = function() {
		$http({url: '/api/appliance', method: "GET", params: {"property_id": $sessionStorage.currentUser.property_id }}).then(function(response) {
			// console.log(response.data);
			$scope.appliances = response.data;
			// console.log($scope.appliances);
			if($scope.appliances[0].status == "Good") {
				$scope.reqRepairButton = true;
				$scope.needsRepairButton = false;
			}
			else {
				$scope.reqRepairButton = false;
				$scope.needsRepairButton = true;
			}
		});
	}

	// allow user to open request form
	$scope.requestRepair = function() {
		$scope.repairRequested = true;
		$scope.reqRepairButton = false;
		$scope.successMsg = false;
	};

	// Sends form data entered after requesting repair to database
	$scope.submitRepair = function() {
		$http({url: '/api/appliance/update', method: "GET", params: {"appliance_id": 1, "repairDesc": $scope.repairDesc}}).then(function(response) {
			$scope.loadAppliances();
			$scope.repairRequested = false;
			$scope.reqRepairButton = false;
			$scope.needsRepairButton = true;
			$scope.successMsg = true;
		});
	};

	// updates the repair request to be "fixed"
	$scope.needsRepair = function() {
		console.log("Here");
		$http({url: '/api/appliance/fix', method: "GET", params: {"appliance_id": 1}}).then(function(response) {
			console.log("Here2");
			$scope.loadAppliances();
			$scope.reqRepairButton = true;
			$scope.needsRepairButton = false;
			$scope.successMsg = true;
		});
	};

});
