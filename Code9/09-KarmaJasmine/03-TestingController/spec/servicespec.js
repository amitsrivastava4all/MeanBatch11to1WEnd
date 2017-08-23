describe("This is Service Suite",function(){
   
   beforeEach(module("serviceapp"));
    
  var myservice;

  beforeEach(inject(function(_myfactory_){
      myservice = _myfactory_;
      
  }));
it("Should add two numbers",function(){
    var result = myservice.add(100,200);
    expect(result).toEqual(300);
});
});
                    
                    