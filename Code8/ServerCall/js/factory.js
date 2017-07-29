app.factory("serverfactory",function($http,$q,WSURL){
	var object = {
		//callServer:function(searchImg,scope){
		callServer:function(searchImg){
			var pr = $q.defer();
			//var tempImageUrl = "http://api.giphy.com/v1/gifs/search?q=Tom%20and%20Jerry%20&api_key=dc6zaTOxFJmzC";
			var imageurl = "http://api.giphy.com/v1/gifs/search?q="+searchImg+"&api_key=dc6zaTOxFJmzC";
			console.log("Before HTTP CALL ");
			$http.get(WSURL).then(success,fail); // this is asynch call
			console.log("After HTTP Call");
			function success(data){
				console.log("SUCCESS ",data);
				pr.resolve(data);
				//scope.result = data.data;
			}
			function fail(er){
				console.log("FAIL");
				pr.reject(er);
				//scope.error = er;
			}
			console.log("Exit from Call Server....");
			return pr.promise;
		}
	};
	
	return object;
})