angular.module('LandlordSignUpCtrl', []).controller('LandlordSignUpController', function( $scope, $http) {
	$scope.lUserName="";
	$scope.lPassword="";
	$scope.lName="";
	$scope.lEmail="";
	$scope.PNumber="";
	$scope.pAddress="";
	$scope.Aname="";


	//sends form data to be entered in DB
	$scope.submitLandlordData=function(){
	console.log('b4set');
		var landlordData={
			'Lusername': $scope.lUserName,
			'Lpassword':$scope.lPassword,
			'Lname':$scope.lName,
			'Lemail':$scope.lEmail,
			'Lphonenumber':$scope.PNumber,
			'Paddress':$scope.pAddress,
			'Aname':$scope.Aname
		};
		console.log(landlordData);
		console.log('after set');
		$http({url:'/api/addLandord',method:"POST", params:landlordData})
	};
	






});
