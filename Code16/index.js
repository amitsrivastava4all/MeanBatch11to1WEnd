const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/welcome",function(req,res){
	res.send({id:1001,name:'Amit'});
});
app.post("/hello",function(req,res){
	res.send({id:1001,name:'Amit',role:'Arch'});
});
app.listen(3211,()=>{
	console.log("server start...");
});
module.exports = app;