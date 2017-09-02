var crudOperations = {
	userList :[],
	add(userObject){
		this.userList.push(userObject);
		
		console.log("ARRAY is ",this.userList);
		return true;
	}
}
module.exports = crudOperations;