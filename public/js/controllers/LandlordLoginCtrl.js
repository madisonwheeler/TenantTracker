angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope) {

    $scope.landlordLogin = function(){
       window.location = "/landlord";
   	}
    
    $scope.home = function(){
        window.location = "/home";
    }
})