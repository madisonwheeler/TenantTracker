angular.module('LoginService', []).factory('LoginService' , function($http) {
	var currUser = null;
	var isAuth = true;
	// authenitcates login creditials
	return {
		login : function(username, password) {
			// console.log($http({url:'/api/login', method:"POST", data: {"username" : username, "password": password}}));

			$http({url:'/api/login', method:'POST', data: {'username': username, 'password' : password}})
				.then(function(response) {
					console.log('success');
					console.log(response);
					isAuth = true;
					return "success1";
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
