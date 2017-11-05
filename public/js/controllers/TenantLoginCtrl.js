angular.module('TenantLoginCtrl', []).controller('TenantLoginController', function($scope) {

    $scope.tenantLogin = function(){
       window.location = "/tenant";
   	}
})