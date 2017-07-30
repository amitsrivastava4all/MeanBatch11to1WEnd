// Routing of SPA

//app.constant("LOGIN","/login");
app.config(function($routeProvider,$locationProvider,LOGIN,REGISTER,ABOUT){
	$locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"home.html",
        controller:"homeCtrl"
    }).when(LOGIN,{
        templateUrl:"login.html",
        controller:"loginCtrl"
    }).when(REGISTER,{
        templateUrl:"register.html"
    }).when("/offers/:count/:discount",{
        templateUrl:"offers.html",
        controller:"offerCtrl"
    }).when(ABOUT,{
        template:"<h1>This is SPA Demo</h1>"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});