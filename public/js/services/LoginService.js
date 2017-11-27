angular.module('LoginService', []).factory('LoginService' , function($http) {
	var currUser = null;
	var isAuth = false;
	// authenitcates login creditials
	return {
		login : function(username, password) {
			// console.log($http({url:'/api/login', method:"POST", data: {"username" : username, "password": password}}));

			return $http({url:'/api/login', method:'POST', data: {'username': username, 'password' : password}})
				.then(function successCB(response) {
					console.log('success ' + response.data)
					isAuth = true;
					return isAuth;
				},
				function errorCB(response) {
					console.log('error ' + response.data);
					isAuth = false;
					return isAuth;
				});
		},
		getUser : function() {
			return currUser;
		},

		isAuth : function() {
			return isAuth;
		}

	};
});
