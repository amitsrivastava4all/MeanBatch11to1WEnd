app.controller("myctrl",function($scope,serverfactory){
	$scope.doSearch=function(){
		serverfactory.callServer($scope.searchImg,$scope);
	}
});