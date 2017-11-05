angular.module('LandlordLoginCtrl', []).controller('LandlordLoginController', function($scope) {

    $scope.landlordLogin = function(){
       window.location = "/landlord";
   	}
}