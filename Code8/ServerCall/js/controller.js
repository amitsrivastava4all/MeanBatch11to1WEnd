app.controller("myctrl",function($scope,serverfactory){
	$scope.doSearch=function(){
		//serverfactory.callServer($scope.searchImg,$scope);
		var promise = serverfactory.callServer($scope.searchImg);
		for(var i = 1; i<=10; i++){
			console.log("I am Doing Something Else ",i);
		}
		promise.then(function(data){
			console.log("Data is ",data);
			$scope.result = data.data.mobiles;
		},function(){
			$scope.error = er;
		});
	}
});