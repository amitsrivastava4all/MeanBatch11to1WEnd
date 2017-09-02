const helper = {
	isBlank(str){
		return str.trim().length>0?false:true;
		
	},
	
	checkPassword(password){
	return password.length>=8 ?true:false;
},
checkEmail(email){
	return email.indexOf("@")>=0?true:false;
}
	
}
module.exports = helper;