const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/mobiles/:apikey',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    var mobile1 = new Mobile(1001,"Apple",9999);
    var mobile2 = new Mobile(1002,"Samsung",19999);
    var mobileList = [mobile1,mobile2];
    var apikey = req.params.apikey;
    if(apikey==123456){
    res.send(JSON.stringify(mobileList));
}
else{
    var object = {
        message : "U Can't Access Invalid API KEY",
        errorCode: 500
    }
    res.send(JSON.stringify(object));
}
});

app.listen(7777,function(){
    console.log("Server start");
})

class Mobile{
constructor(id , name, price){
    this.id= id;
    this.name = name;
    this.price = price;
}

}