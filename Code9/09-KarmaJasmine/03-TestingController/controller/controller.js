var app = angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.add=function(){
            $scope.result = $scope.firstNumber + $scope.secondNumber;
    }
})