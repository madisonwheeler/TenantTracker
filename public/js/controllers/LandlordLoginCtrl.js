angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope, $location, LoginService) {

    $scope.username = '';
    $scope.password = '';
	// checks for correct login using the login service
    $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)){
          console.log('successful login');
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $location.href = "/landlord";
        }
        else {
            $scope.error = "Incorrect username or password!";
        }
    };
})
