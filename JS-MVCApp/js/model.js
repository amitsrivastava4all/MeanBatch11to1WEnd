/*function Employee(id, name,salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
}*/
class Employee{
	constructor(id , name, salary){
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
}

var empOperations = {
	empArr:[],
	addNewEmp:function(id, name,salary){
		var empObject = new Employee(id,name,salary);
		this.empArr.push(empObject);
	},
	deleteEmp:function(){
		
	},
	searchEmp:function(){
		
	}
}


/*
class Employee{
	 int id;
	 String name;
	 double salary;
	Employee(id ,name ,salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
	}
}

*/