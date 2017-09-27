var express = require('express');
var router = express.Router();

router.get('/about',function(request,response){
     const content = require("./logic.js");
      content(response);
//    // response.send(data);
 });

router.get('/balance',function(req,res){
      if(req.session.uid){
            res.send('Balance is 10000');
      }
      else{
            const path = require("path");
            var newpath = path.normalize(__dirname+"/../..");
            newpath = path.join(newpath,'/public/userlogin.html');
            res.sendFile(newpath);
      }
}) ;

 var counter = 0;
router.get('/welcome',function(request,response){
counter++;
response.send(`<h1>Counter is ${counter} </h1>` );
});
module.exports = router;