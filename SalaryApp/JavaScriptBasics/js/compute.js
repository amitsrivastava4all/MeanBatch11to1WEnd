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






