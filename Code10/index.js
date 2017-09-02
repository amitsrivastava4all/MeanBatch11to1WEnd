/*var a = 100;
var b= 200;
var c = a + b;
console.log(`Sum is ${c}`);*/

const obj = require("./app");
var sum = obj.add(100,200);
console.log(`Sum is ${sum}`);
obj.pr();
obj.sh();