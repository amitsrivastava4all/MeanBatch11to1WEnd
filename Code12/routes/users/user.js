var express = require('express');
var router = express.Router();

router.get('/about',function(request,response){
     const content = require("./logic.js");
      content(response);
//    // response.send(data);
 });

 var counter = 0;
router.get('/welcome',function(request,response){
counter++;
response.send(`<h1>Counter is ${counter} </h1>` );
});
module.exports = router;