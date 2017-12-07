angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		// link to home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		
		// link to tenant login page
		.when('/tenantLogin', {
			templateUrl: 'views/tenantLogin.html',
			controller: 'TenantLoginController'
		})
		
		// link to landlord login page
		.when('/landlordLogin', {
			templateUrl: 'views/landlordLogin.html',
			controller: 'LandlordLoginController'
		})
		
		// link to landlords sign up page
		.when('/landlordSignUp', {
			templateUrl: 'views/landlordSignUp.html',
			controller: 'LandlordSignUpController'
		})
		
		// link to tenants sign up page
		.when('/tenantSignUp', {
			templateUrl: 'views/tenantSignUp.html',
			controller: 'TenantSignUpController'
		})

		// link to landlord homepage
		.when('/landlord', {
			templateUrl: 'views/landlord.html',
			controller: 'LandlordController'
		})

		// link to tenant homepage
		.when('/tenant', {
			templateUrl: 'views/tenant.html',
			controller: 'TenantController'	
		})

		// link to appliance page
		.when('/appliances', {
			templateUrl: 'views/appliances.html',
			controller: 'ApplianceController'	
		})
		
		// link to rent page
		.when('/rent', {
			templateUrl: 'views/rent.html',
			controller: 'RentController'	
		});

	$locationProvider.html5Mode(true);

}]);
