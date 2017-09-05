const fs = require("fs");
//var content = fs.readFileSync("app.js");
//console.log("Content is "+content);
function done(error,content){
	if(error){
		console.log("Can't Read this file...");
	}
	else{
		console.log("Content is "+content);
	}
}
console.log("Before Read");
fs.readFile("app.js",done);
console.log("After Read");
var a= 100;
var b = 200;
var c = a + b;
console.log("Sum is "+c);