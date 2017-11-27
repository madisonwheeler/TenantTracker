angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope, $location, LoginService) {

    $scope.username = '';
    $scope.password = '';
	// checks for correct login using the login service
    $scope.formSubmit = function() {
      LoginService.login($scope.username, $scope.password).then(function cb(result) {
        if(result){
          console.log('successful login');
          $scope.error = '';
          $scope.username = '';
          $scope.password = '';
          // $location.href = "/landlord";
          window.location = "/landlord";
        }
        else {
          $scope.error = "Incorrect username or password.";
        }
      });
    };
})
