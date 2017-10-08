var fs = require('fs');
var readableStream = fs.createReadStream(__dirname+"/yuvi.mp4");
//var readableStream = fs.createReadStream('/Users/amit/Downloads/theri.mp4',{ highWaterMark: 9720 });
var express = require("express");

var app = express();
app.use(express.static("public"));
app.get('/showvideo',(req,res)=>{
res.writeHead(200,{'Content-Type': 'video/mp4'});
	readableStream.pipe(res);
//readableStream.on('data', function(chunk){
//  console.log('Received  bytes of data.'+chunk.length);
//});
//readableStream.on('end', function(chunk){
//  console.log('Read Done...');
//});
	});

app.listen(9876,()=>{
	console.log("Server Start....");
})