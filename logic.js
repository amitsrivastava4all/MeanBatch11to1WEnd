var count = 0;
window.addEventListener("load",bindEvent);	
function bindEvent(){
var buttons = document.getElementsByTagName("button");
for(var i= 0;i<buttons.length; i++){
	buttons[i].addEventListener("click",showCount);
}	
}

		function showCount(){
			var operator = this.innerHTML;
			console.log(" Event is ",this);
			var t = document.getElementsByTagName("span")[0];
			var expression = count + operator + 1;
			t.innerHTML = count = eval(expression);
			//t.innerHTML = operator=='+'?++count:--count;
		}

//		function printCount() {
//			count++;
//			print();
//
//			
//		}
//
//		function print() {
//			var t = document.getElementsByTagName("span");
//			t[0].innerHTML = count;
//
//		}
//
//		function minusCount() {
//			count--;
//			print();
//
//		}