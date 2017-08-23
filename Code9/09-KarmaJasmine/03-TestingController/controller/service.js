var app = angular.module("serviceapp",[]);
app.factory("myfactory",function(){
    return {
        add:function(x,y){
            return x + y;
        }
    }
})