angular.module('TenantSignUpCtrl', []).controller('TenantSignUpController', function( $scope, $http) {
	


	//sends form data to be entered in DB
	$scope.submitTenantData=function(){

		var tenantData={
			"username": $scope.tUserName,
			"password":$scope.tPassword,
			"tname":$scope.tName,
			"email":$scope.tEmail,
			"phonenumber":$scope.tPNumber,
			"user_type":'tenant',
			"address":$scope.pAddress
		};
		console.log(tenantData);
		console.log('entering new tenant data');
		
		$http({url:'/api/addTenant',method:"POST", data:tenantData}).then(function(response) {
			console.log("post complete: going to tenant login page");
			window.location = "/tenantLogin";
		});
	};



});
