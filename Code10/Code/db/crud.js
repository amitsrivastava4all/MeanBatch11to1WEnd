var crudOperations = {
	userList :[],
	add(userObject){
		this.userList.push(userObject);
		
		console.log("ARRAY is ",this.userList);
		return true;
	},
	search(userObject){
		var subArray = this.userList.filter(function(user){
			return user.userid==userObject.userid && user.password==userObject.password;
		});
		return subArray.length>0?"Found":"Not Found";
	}
}
module.exports = crudOperations;