angular.module('TenantLoginCtrl', []).controller('TenantLoginController', function($scope, LoginService) {

	// checks for correct login using the login service
	$scope.formSubmit = function() {
		if(LoginService.login($scope.username, $scope.password)){
			$scope.error = '';
			$scope.username = '';
			$scope.password = '';
			window.location = "/tenant";
		}
		else {
			$scope.error = "Incorrect username or password!";   
		}
	};
})
