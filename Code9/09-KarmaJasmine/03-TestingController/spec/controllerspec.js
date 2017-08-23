describe("This is Controller Suite",function(){
   
   beforeEach(module("myapp"));
    
  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
    it("Should add two numbers",function(){
       var myscope = {};
      var controller = $controller('myctrl', { $scope: myscope });
        myscope.firstNumber = 100;
        myscope.secondNumber = 200;
        
      myscope.add();
      expect(myscope.result).toEqual(300);
    });
});