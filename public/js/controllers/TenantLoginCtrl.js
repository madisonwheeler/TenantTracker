angular.module('TenantLoginCtrl', []).controller('TenantLoginController', function($scope, LoginService) {

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