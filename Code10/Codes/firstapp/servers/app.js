const express = require("express");
const app = express();
app.use(express.static("../public"));

app.get('/about',function(request,response){
    const content = require("./logic.js");
     content(response);
   // response.send(data);
});
app.listen(1234,()=>{
    console.log("Server Start...");
})