angular.module('LoginService', []).factory('LoginService' , function() {
    var admin = 'admin';
    var pass = 'pass';
    var isAuth = false;
    
    return {
        login : function(username, password) { 
            isAuth = (username === admin && password === pass) ||
                     (username === "johndoe" && password === "strongpass");
          
            return isAuth;
        },
        
        isAuth : function () {
            return isAuth;
        }
    }; 
});