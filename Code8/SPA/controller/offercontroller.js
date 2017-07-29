
app.controller("offerCtrl",function($scope,$routeParams,offerFactory){
    $scope.offermsg = "You Have "+$routeParams.count+" Offers "
    +" and Discount is "+$routeParams.discount+" %  Other Offers "
    +offerFactory.otheroffers+" Calling Http ";
    var promise = offerFactory.getjson();
    // Do Something Else
    // Some Processing logic
    var sum=0;

    for(var i = 1; i<=100; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    function pass(data){
        $scope.offers=data;
    }
    function fail(er){
        $scope.error=er;
    }
    promise.then(pass,fail);

})