angular.module('ApplianceCtrl', []).controller('ApplianceController', function($sessionStorage, $scope, $http, LoginService) {
	// VARIABLES =================================================================
	$scope.repairRequested = false;
	$scope.reqRepairButton = true;
	//$scope.hasAppliance = true;
	//$scope.noAppliance = false;
	$scope.needsRepairButton = false;
	$scope.successMsg = false;
	$scope.updateRepairStatusButton = false;
	$scope.repairDesc = "";
	$scope.appliances = [];


	// FUNCTIONS =================================================================
	// load appliances onto page
	$scope.loadAppliances = function() {
		$http({url: '/api/appliance', method: "GET", params: {"property_id": $sessionStorage.currentUser.property_id }}).then(function(response) {
			console.log(response);
			if(angular.equals( response.data,"Not found")){
					$scope.hasAppliance = false;
					$scope.noAppliance = true;
			}
			else{
			
				$scope.hasAppliance = true;
				$scope.noAppliance = false;
				$scope.appliances = response.data;
				// console.log($scope.appliances);
				if($scope.appliances[0].status == "Good") {
					$scope.reqRepairButton = true;
					$scope.needsRepairButton = false;
					$scope.updateRepairStatusButton = false;
				}
				else {
					$scope.reqRepairButton = false;
					$scope.needsRepairButton = true;
					if($sessionStorage.currentUser.user_type == "landlord") {
						$scope.updateRepairStatusButton = true;
					}
				}
			}
			
		});
	}
	// add appliance
	$scope.addAppliance = function(){
		var appData={
			"Aname":$scope.newApp,
			"property_id": $sessionStorage.currentUser.property_id
		}
		$http({url: '/api/appliance/add', method: "POST", data: appData }).then(function(response) {
			$scope.loadAppliances();
		});
	};
	// allow user to open request form
	$scope.requestRepair = function() {
		$scope.repairRequested = true;
		$scope.reqRepairButton = false;
		$scope.successMsg = false;
	};

	// Sends form data entered after requesting repair to database
	$scope.submitRepair = function() {
		var upData = {"property_id": $sessionStorage.currentUser.property_id, 
									"repairDesc": $scope.repairDesc}
	
		$http({url: '/api/appliance/update', method: "GET", params: upData }).then(function(response) {
			$scope.loadAppliances();
			$scope.repairRequested = false;
			$scope.reqRepairButton = false;
			$scope.needsRepairButton = true;
			$scope.successMsg = true;
			if($sessionStorage.currentUser.user_type == "landlord"){
				$scope.updateRepairStatusButton = true;
			}
		});
	};

	// updates the repair request to be "fixed"
	$scope.needsRepair = function() {
		//console.log("Here");
		$http({url: '/api/appliance/fix', method: "GET", params: {"property_id": $sessionStorage.currentUser.property_id}}).then(function(response){
			//console.log("Here2");
			$scope.loadAppliances();
			$scope.reqRepairButton = true;
			$scope.needsRepairButton = false;
			$scope.successMsg = true;
		});
	};

});
