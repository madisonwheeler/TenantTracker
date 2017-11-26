angular.module('RentCtrl', []).controller('RentController', function($scope, $http) {
	
	//variables 
	$scope.rentHistory={};
	$scope.sampleRentHistory=[
		{
			date:"SEP 1 2017",
			tenant_Status: "Sent",
			landlord_Status: "Recieved"
		},
		{
			date:"OCT 1 2017",
			tenant_Status: "Sent",
			landlord_Status: "Recieved"
		},
		{
			date:"NOV 1 2017",
			tenant_Status: "Sent",
			landlord_Status: "Recieved"
		},
		{
			date:"DEC 1 2017",
			tenant_Status: "Sent",
			landlord_Status: "Not Recieved"
		}
	];
	
	//functions
	
	//loads rent history into page
	$scope.loadRentTable = function() {
		console.log('rent table loaded');
	}
	
	// updates tenant rent history for this date
	$scope.sendRent = function() {
		console.log('rent sent');
	}
	
});
