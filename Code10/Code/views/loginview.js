function loginView(){
	var userid='ram';
	var pwd = '123';
	var User = require("../db/user");
	var userObject = new User(userid,pwd);
	var db = require("../db/crud");
	var message= db.search(userObject);
	console.log(message);
}
module.exports=loginView;