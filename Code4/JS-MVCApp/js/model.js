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
		this.isReadyForDelete=false;
	}
}

var empOperations = {
	empArr:[],
	employeeId : 1000,
	getEmployeeId:()=>empOperations.employeeId,
	addNewEmp:function(id, name,salary){
		
		var empObject = new Employee(this.employeeId,name,salary);
		this.empArr.push(empObject);
		this.employeeId++;
	},
	deleteEmp:function(){
		this.empArr = this.empArr.filter(function(emp){
			return emp.isReadyForDelete==false;
		});
	},
	sortBySalary:function(){
		this.empArr.sort(function(one,two){
			return one.salary - two.salary;
		})
	},	
	searchEmp:function(){
		
	},
	countReadyForDelete:function(){
		 return this.empArr.filter(function(emp){
			return emp.isReadyForDelete;
		}).length;
		
		/*var subArray = this.empArr.filter(function(emp){
			return emp.isReadyForDelete;
		});
		return subArray.length;*/
	},	
	markForDeletion:function(id){
		var subArray = this.empArr.filter(function(emp){
			return emp.id==id;
		});
		subArray[0].isReadyForDelete = !subArray[0].isReadyForDelete;
		
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