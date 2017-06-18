/*
Controller is a Glue B/w View and Model
*/
window.addEventListener("load",bindEvent);
function bindEvent(){
	document.getElementById("firstname").focus();
	document.getElementById("greetButton").addEventListener("click",takeValue);
	
	document.getElementById("clearButton").addEventListener("click",clearData);
	
	document.getElementById("firstname").addEventListener("blur",takeValue);
	document.getElementById("firstname").addEventListener("keyup",takeValue);
}

														  
														  
function takeValue(){
	
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	if(isNotEmpty(firstName)){
	document.getElementById("firsterror").innerHTML="";		
	firstName = initCap(firstName);
	lastName = initCap(lastName);
	document.getElementById("message").innerHTML=firstName + " "+lastName;
	}
	else{
		document.getElementById("firsterror").innerHTML="FirstName Can't Be Blank";
	}
}

function clearData(){
	var textBoxes = document.getElementsByClassName("clearAll");
	for(var i = 0 ; i<textBoxes.length; i++){
		textBoxes[i].value="";
	}
//	document.getElementById("firstname").value="";
//	document.getElementById("lastname").value="";
	document.getElementById("message").innerHTML="";
	document.getElementById("firstname").focus();
}