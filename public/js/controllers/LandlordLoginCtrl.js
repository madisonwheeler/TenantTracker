angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope, LoginService) {
        
    $scope.formSubmit = function() {
        if(LoginService.login($scope.username, $scope.password)){
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            window.location = "/landlord";
        }
        else {
            $scope.error = "Incorrect username or password!";   
        }
    };
})