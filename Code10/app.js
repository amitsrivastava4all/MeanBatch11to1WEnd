function addTwoNumbers(firstNumber , secondNumber){
	return parseInt(firstNumber) + parseInt(secondNumber);
	
}
function print(){
console.log("this is print");
}

function show(){
console.log("this is show");
}
var object ={
pr:print,sh:show,add:addTwoNumbers
}
module.exports=object;
/*module.exports.pr = print;
module.exports.sh = show;
module.exports.add = addTwoNumbers;*/