angular.module('LandlordSignUpCtrl', []).controller('LandlordSignUpController', function( $scope, $http) {
	$scope.lUserName="";
	$scope.lPassword="";
	$scope.lName="";
	$scope.lEmail="";
	$scope.PNumber="";
	$scope.pAddress="";
	


	//sends form data to be entered in DB
	$scope.submitLandlordData=function(){
	
		var landlordData={
			"username": $scope.lUserName,
			"password":$scope.lPassword,
			"lname":$scope.lName,
			"phonenumber":$scope.lPNumber,
			"email":$scope.lEmail,
			"user_type":'landlord',
			"rentaladdress":$scope.pAddress,
		};
		
		console.log('entering new landlord data');
		
		$http({url: '/api/addLandlord', method: "POST", data:landlordData }).then(function(response) {
			console.log("post complete: going to landlord login page");
			window.location = "/landlordLogin";
		});
	};
	


//{"username": $scope.lUserName, "password":$scope.lPassword, "name":$scope.lName, "phonenumber":$scope.lPNumber, "email":$scope.lEmail, "user_type":'landlord', "rentaladdress":$scope.pAddress }



});
