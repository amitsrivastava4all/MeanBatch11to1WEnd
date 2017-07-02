function compute(){
	var salary = parseFloat(document.getElementById("salary").value);
	var hra = salary * 0.30;
	var da = salary * 0.20;
	var ta = salary * 0.10;
	var pf = (salary * 0.05)*2;
	var ns = salary + hra + da + ta - pf;
	var tax = ns * 0.10;
	ns = ns - tax;
	document.getElementById("hra").innerHTML=hra;
	document.getElementById("da").innerHTML=da;
	document.getElementById("ta").innerHTML=ta;
	document.getElementById("pf").innerHTML=pf;
	document.getElementById("ns").innerHTML=ns;
	document.getElementById("tax").innerHTML=tax;
	
	//console.log("compute call...");
}
var salaryArray=[];
function add(){
	var sal = document.getElementById("salary").value;
	hra=document.getElementById("hra").innerHTML;
	da=document.getElementById("da").innerHTML;
	ta=document.getElementById("ta").innerHTML;
	pf = document.getElementById("pf").innerHTML;
	ns= document.getElementById("ns").innerHTML;
	tax = document.getElementById("tax").innerHTML;
	var salaryObject = new SalaryDetails(sal,hra,da,ta,pf,ns,tax);
	salaryArray.push(salaryObject);
	var table = document.getElementById("tablebody");
	var tr = table.insertRow();
	tr.insertCell(0).innerHTML = sal;
	tr.insertCell(1).innerHTML = hra;
	tr.insertCell(2).innerHTML = da;
	tr.insertCell(3).innerHTML = ta;
	tr.insertCell(4).innerHTML = pf;
	tr.insertCell(5).innerHTML = ns;
	tr.insertCell(6).innerHTML = tax;
	
}
function clearData(){
	document.getElementById("tablebody").innerHTML="";
}
function load(){
salaryArray.forEach(printRow);
}
function printRow(salaryObject){
	var table = document.getElementById("tablebody");
var tr = table.insertRow();
	tr.insertCell(0).innerHTML = salaryObject.salary;
	tr.insertCell(1).innerHTML = salaryObject.hra;
	tr.insertCell(2).innerHTML = salaryObject.da;
	tr.insertCell(3).innerHTML = salaryObject.ta;
	tr.insertCell(4).innerHTML = salaryObject.pf;
	tr.insertCell(5).innerHTML = salaryObject.ns;
	tr.insertCell(6).innerHTML = salaryObject.tax;
}


function SalaryDetails(salary,hra,da,ta,pf,ns,tax){
this.salary = salary;
this.hra = hra;
this.da = da;
this.ta = ta;
this.pf = pf;
this.ns = ns;
this.tax = tax;	
}






