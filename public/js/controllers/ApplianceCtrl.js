angular.module('ApplianceCtrl', []).controller('ApplianceController', function($scope, $http) {
	// variables 	
	$scope.repairRequested = false;
	$scope.reqRepairButton = true;
	$scope.needsRepairButton = false;
	$scope.successMsg = false;
	$scope.repairDesc = "";
	$scope.appliances = {};
	$scope.appliance = {
		name: "",
		brand: "",
		image: "",
		status: ""
	};
	// functions
	
	// load appliances onto page
	$scope.loadAppliances = function() {
		$http.get('/api/properties').then(function(response) {
			console.log(response.data);
			$scope.appliances = response.data;
			console.log($scope.appliances.appliance1_status);
			if($scope.appliances.appliance1_status == "Good") {
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
	}

	// Sends form data entered after requesting repair to db
	$scope.submitRepair = function() {
		$http({url: '/api/properties/update', method: "GET", params: {"app_code": $scope.appliances.code, "repairDesc": $scope.repairDesc}}).then(function(response) {
			$scope.loadAppliances();
			$scope.repairRequested = false;
			$scope.reqRepairButton = false;
			$scope.needsRepairButton = true;
			$scope.successMsg = true;
			//$scope.$apply();
		});
	// email code
	/*$http({url: '/api/appliance/mail', method: "POST", params:{}}).then(function(response) {
	console.log('mail sent');
		});*/
		
	// fixes the repair
	$scope.needsRepair = function() {
		$http({url: '/api/properties/fix', method: "GET", params: {"app_code": $scope.appliances.code}}).then(function(response) {
			$scope.loadAppliances();
			$scope.reqRepairButton = true;
			$scope.needsRepairButton = false;
			$scope.successMsg = true;
		});
	}
	}

});
