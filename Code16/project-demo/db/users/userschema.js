const connection = require("../common/connection");

var Schema = connection.Schema;
var UserSchema = new Schema({userid:String,password:String});
var UserModel = connection.model("usermasters",UserSchema);
module.exports = UserModel;