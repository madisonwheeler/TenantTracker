angular.module('TenantSignUpCtrl', []).controller('TenantSignUpController', function( $scope, $http) {
$scope.lUserName="";
	$scope.tPassword="";
	$scope.tName="";
	$scope.tEmail="";
	$scope.lId="";
	


	//sends form data to be entered in DB
	$scope.submitTenantData=function(){
	console.log('b4set');
		var tenantData={
			'Tusername': $scope.lUserName,
			'Tpassword':$scope.lPassword,
			'Tname':$scope.lName,
			'Temail':$scope.lEmail,
			'Tphonenumber':$scope.PNumber,
			'Lid':$scope.lId
		};
		console.log(tenantData);
		console.log('after set');
		$http({url:'/api/addTenant',method:"POST", params:tenantData})
	};



});
