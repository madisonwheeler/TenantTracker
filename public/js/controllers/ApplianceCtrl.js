angular.module('ApplianceCtrl', []).controller('ApplianceController', function($scope) {
		
	$scope.repairRequested = false;
	$scope.reqRepairButton = true;

	$scope.requestRepair = function() {
		$scope.repairRequested = true;
		$scope.reqRepairButton = false;
	}

});