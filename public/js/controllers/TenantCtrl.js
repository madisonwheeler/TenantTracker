angular.module('TenantCtrl', []).controller('TenantController', function($rootScope, $scope, $http, $location) {

	$scope.clickedHome = function(){
		window.location = "/";
	}

	$http({url: '/api/tenant/property', method:'POST', data: {'property_id': $rootScope.currentUser.property_id}}).then(function(response) {
		console.log("Property " + response);
		if(response.data != null){
			$scope.property = response.data;
		}
	});
			// if($scope.appliances[0].status == "Good") {
			// 	$scope.reqRepairButton = true;
			// 	$scope.needsRepairButton = false;
			// }
			// else {
			// 	$scope.reqRepairButton = false;
			// 	$scope.needsRepairButton = true;
			// }
		// });

	// }

});
