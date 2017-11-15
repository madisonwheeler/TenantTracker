angular.module('LoginService', []).factory('LoginService' , function($http) {
    var currUser = null;
    var isAuth = false;
    return {
        login : function(username, password) { 
            $http({url: '/login', method: "GET", params: {"user": username, "pass": password}}).then(function(response) {
                console.log(response);
                console.log(response.data);
                if(response.data != "Err") {
                    console.log("here");
                    currUser = response.data;
                    isAuth = true;
                }
                else {
                    isAuth = false;
                }
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