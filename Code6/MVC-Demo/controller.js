app.controller("greetctrl",function($scope,greetfactory){
	$scope.showDiv= true;
	$scope.sayHello=function(){
		var firstName =$scope.fname;
		var lastName = $scope.lname;
		var result = greetfactory.initCap(firstName)+" " + greetfactory.initCap(lastName)
		$scope.fullname = result;
		$scope.showDiv = false;
		}
})