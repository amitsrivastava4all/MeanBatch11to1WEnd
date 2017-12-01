class User{
constructor(userid, password) {
   this.userid = userid;
   this.password = password;
   this.loginTime = new Date();
   this.status="A";
    
}


}
module.exports = User;