app.factory("userfactory",function(){
    var object = {};
    object.checkLogin=function(userid, pwd){
        var userObject = {
            "userid":userid,
            "password":pwd
        }
        $http.post("http://localhost:1234/login",userObject);
        
    }
})