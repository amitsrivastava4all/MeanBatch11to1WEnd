const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({userid:String,password:String,username:String});


try{
var User = mongoose.model("usermasters",userSchema);
}
catch(e){
    
    console.log(e);
}


module.exports = User;