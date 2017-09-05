function register(){
	userid = "amit";
	password = "123";
	email = "ram@yahoo.com";
	const helper = require("../helper/validation");
	if(!helper.isBlank(userid) && helper.checkPassword(password) && helper.checkEmail(email)){
		const User = require("../db/user");
		var obj = new User(userid, password, email);
		var db = require("../db/crud");
		if(db.add(obj)){
			return "Record Added...";
		}
	}
	else{
		return "Validation Fail...";
	}
}
module.exports = register;