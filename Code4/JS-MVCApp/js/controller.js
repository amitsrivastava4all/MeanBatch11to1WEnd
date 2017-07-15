/*
Controller is A Glue B/w View and Model
1. Take Input from the View and Give it to Model
*/
window.addEventListener("load",bindEvents);

function storeCity(){
	var city = document.getElementById("city");
	var cityArr = ["Delhi","Mumbai"];
	cityArr.forEach(function(c){
		var opt = document.createElement("option");
		opt.innerHTML=c;
		city.appendChild(opt);
	})
}

function bindEvents(){
	storeCity();
	showNoOfRecords();
	console.log("Emp Id is ",empOperations.getEmployeeId());
	document.getElementById("empid").innerHTML=empOperations.getEmployeeId();
	document.getElementById("add").addEventListener("click",addNewRecord);
	document.getElementById("delete").addEventListener("click",deleteRecord);
	document.getElementById("sort").addEventListener("click",sortBySalary);
	document.getElementById("save").addEventListener("click",saveRecord);
	document.getElementById("load").addEventListener("click",loadRecord);
}
function browserSupport(){
	if(!localStorage){
		alert("Can't Save Ur Browser is Outdated....");
		return false;
	}
	return true;
}
function saveRecord(){
	if(browserSupport()){
		var json = JSON.stringify(empOperations.empArr);
		localStorage.mydata=json;
	}
}
function loadRecord(){
	if(browserSupport()){
		if(localStorage.mydata){
			var objects = JSON.parse(localStorage.mydata);
			empOperations.empArr=objects;
			printRecords(empOperations.empArr);
		}
		else{
			alert("Can't Load the Data , there is no data in Storage...");
		}
	}
}
function sortBySalary(){
	empOperations.sortBySalary();
	printRecords(empOperations.empArr);
}

function deleteRecord(){
	empOperations.deleteEmp();
	printRecords(empOperations.empArr);
}
function updateRecords(){
showNoOfRecords();
	var count = empOperations.countReadyForDelete();
	document.getElementById("noofreadydeletion").innerHTML=count;
}

function printRecords(employeeArray){
var tbody = document.getElementById("empdata");
tbody.innerHTML = "";
employeeArray.forEach(printRecord);	
updateRecords();	
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
	
	document.getElementById("empid").innerHTML=empOperations.getEmployeeId();
	clearFields();
	updateRecords();
}
function prepareDelete(id){
	var img = document.createElement("img");
	img.src = "images/delete.png";
	img.setAttribute("empid",id);
	img.addEventListener("click",readyForDelete);
	return img;
}
function readyForDelete(event){
	
	var id = parseInt(event.srcElement.getAttribute("empid"));
	empOperations.markForDeletion(id);
	updateRecords();
	//alert("Delete is Calling..."+event.srcElement.getAttribute("empid"));
	console.log(event.srcElement.parentNode.parentNode);
	var currentTr = event.srcElement.parentNode.parentNode;
	currentTr.classList.toggle("red");
}
function printRecord(empObject){
	var tbody = document.getElementById("empdata");
	var tr = tbody.insertRow();
	var index = 0;
	for(key in empObject){
		if(key=='isReadyForDelete'){
			continue;
		}
		tr.insertCell(index).innerHTML = empObject[key];
		index++;
	}
	var img = prepareDelete(empObject.id);
	tr.insertCell(index).appendChild(img);
}