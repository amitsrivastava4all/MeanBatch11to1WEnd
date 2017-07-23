app.controller("calccontroller",function($scope,calcfactory){
	console.log("I am in Controller First Line");
	$scope.mystyle='white';
	$scope.currentClick = 0;
	console.log("I am in Controller After mystyle and currentclick");
	$scope.doOperation=function(operator){
		$scope.result = calcfactory.compute($scope.firstno,$scope.secondno,operator);
		//$scope.result = calcfactory[operator]($scope.firstno,$scope.secondno);
		/*if(operator=='+'){
			$scope.result = calcfactory.add($scope.firstno,$scope.secondno); 
			$scope.mystyle='red';
			$scope.currentClick = 1;
		}
		else
		if(operator=='-'){
			$scope.result = calcfactory.subtract($scope.firstno,$scope.secondno); 
			$scope.mystyle='green';
			$scope.currentClick = 2;
		}
		else
		if(operator=='*'){
			$scope.result = calcfactory.multiply($scope.firstno,$scope.secondno); 
			$scope.mystyle='yellow';
			$scope.currentClick = 3;
		}
		else
		if(operator=='/'){
			$scope.result = calcfactory.divide($scope.firstno,$scope.secondno); 
			$scope.mystyle='blue';
			$scope.currentClick = 4;
		}*/
	}
});