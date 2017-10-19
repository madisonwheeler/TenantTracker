angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'I got this Sh**t to work!!!!';

	$scope.clickedLandlord = function(){
       window.location = "/landlord";
   	}

   	$scope.clickedTenant = function(){
   		window.location = "/tenant";
   	}

});