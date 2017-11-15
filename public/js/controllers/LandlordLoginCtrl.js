angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope, $location, LoginService) {
        
    $scope.username = '';
    $scope.password = '';

    $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)){
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