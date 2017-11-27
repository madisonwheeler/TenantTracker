angular.module('TenantLoginCtrl', []).controller('TenantLoginController', function($rootScope, $scope, $http, $location, $sessionStorage, LoginService) {

	$scope.username = "";
	$scope.password = "";

	// checks for correct login using the login service
	$scope.formSubmit = function() {
		$http({url:'/api/login', method:'POST', data: {'username': $scope.username, 'password' : $scope.password}}).then(function(response) {
            console.log(response);
            if(response.data.message == "success"){
                $rootScope.currentUser = response.data.user;
                console.log('successful login');
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $location.path("/tenant");
            }
            else {
                $scope.error = "Incorrect username or password!";
            }
        });
	};
})
