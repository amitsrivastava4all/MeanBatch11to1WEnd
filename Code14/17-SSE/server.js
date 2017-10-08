const express = require("express");
const app = express();
var fs = require('fs');
app.use(express.static("public"));
app.get('/stream',function(req,res){
	console.log("Server Call");
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        fs.watchFile(__dirname+'/public/index.html', function(){
            res.write('event: fileChange\n');
            res.write('data: index.html changed at ' + new Date().toString() + '\n\n');
        });
//        setInterval(function(){
//			console.log("Set Interval Call");
//            res.write('event: message\n');
//            res.write('mymessage: ' + new Date().toString() + '\n\n');
//        },3000);
    });

app.listen(1234,()=>{
console.log("Server Start");
});
