app2.factory("calcfactory",function(){
	console.log("I am in Factory");
	var calcObject = {
		compute:function(x,y,operator){
			var expr = x+operator+y;
			console.log("Expression is "+expr);
			var result = eval(expr);
			return result;
		}
//		add:function(x,y){
//			return parseInt(x) + parseInt(y);
//		},
//		subtract:function(x,y){
//			return parseInt(x) - parseInt(y);
//		},
//		multiply:function(x,y){
//			return parseInt(x) * parseInt(y);
//		},
//		divide:function(x,y){
//			return parseInt(x) / parseInt(y);
//		}
		
	}
	console.log("I am Going to Return an Object ",calcObject);
	return calcObject;
});