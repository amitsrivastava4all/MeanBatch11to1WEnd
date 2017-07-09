/*
Controller is A Glue B/w View and Model
1. Take Input from the View and Give it to Model
*/
window.addEventListener("load",bindEvents);
function bindEvents(){
	showNoOfRecords();
	console.log("Emp Id is ",empOperations.getEmployeeId());
	document.getElementById("empid").innerHTML=empOperations.getEmployeeId();
	document.getElementById("add").addEventListener("click",addNewRecord);
}
function clearFields(){
	var e = document.getElementsByClassName("clearfields");
	/*Array.prototype.forEach.call(e,function(w){
		w.value="";
	});*/
	Array.prototype.forEach.call(e,(w)=>w.value="");
	//document.getElementById("name").value="";
}
function showNoOfRecords(){
	document.getElementById("noofrecords").innerHTML = empOperations.empArr.length;
}
function addNewRecord(){
	var empId = document.getElementById("empid").value;
	var name = document.getElementById("name").value;
	var salary = document.getElementById("salary").value;
	empOperations.addNewEmp(empId , name, salary);
	printRecord(empOperations.empArr[empOperations.empArr.length-1]);
	showNoOfRecords();
	document.getElementById("empid").innerHTML=empOperations.getEmployeeId();
	clearFields();
}
function prepareDelete(id){
	var img = document.createElement("img");
	img.src = "images/delete.png";
	img.setAttribute("empid",id);
	img.addEventListener("click",readyForDelete);
	return img;
}
function readyForDelete(amit){
	alert("Delete is Calling..."+amit.srcElement.getAttribute("empid"));
}
function printRecord(empObject){
	var tbody = document.getElementById("empdata");
	var tr = tbody.insertRow();
	var index = 0;
	for(key in empObject){
		tr.insertCell(index).innerHTML = empObject[key];
		index++;
	}
	var img = prepareDelete(empObject.id);
	tr.insertCell(index).appendChild(img);
}