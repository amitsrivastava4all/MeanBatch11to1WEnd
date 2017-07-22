app.factory("greetfactory",function(){
	var object = {};
	object.initCap = function(str){
		var result= str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
		return result;
	}
	return object;
	
})