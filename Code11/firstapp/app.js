const express = require("express");
 const bodyParser = require('body-parser');
 const ejs = require("ejs");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.set('view engine','ejs');
//app.set('views','views');

 app.get('/about',function(request,response){
     const content = require("./logic.js");
      content(response);
//    // response.send(data);
 });
var counter = 0;
app.get('/welcome',function(request,response){
counter++;
response.send(`<h1>Counter is ${counter} </h1>` );
});
app.post('/login',function(request,response){
    console.log("Request is ",request);
    //response.send('I am in Login');
  var userid = request.body.userid;
  var password = request.body.pwd; 
  //  var userid = request.query.userid;
   // var password = request.query.pwd;
    if(userid==password){
       // response.send('<html><body><h1>Welcome '+userid+"</h1></body></html>");
        let path = require("path"); 
        let fullPath = path.join(__dirname,'/public/welcome.html');
      // response.sendFile(fullPath);
    response.render('welcome',{user:userid});
    }
    else{
        response.send('Invalid Userid or Password ');
    }
});
app.listen(1234,()=>{
    console.log("Server Start...");
})