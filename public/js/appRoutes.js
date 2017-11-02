angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/landlord', {
			templateUrl: 'views/landlord.html',
			controller: 'LandlordController'
		})

		.when('/tenant', {
			templateUrl: 'views/tenant.html',
			controller: 'TenantController'	
		})

		.when('/appliances', {
			templateUrl: 'views/appliances.html',
			controller: 'ApplianceController'	
		});

	$locationProvider.html5Mode(true);

}]);
