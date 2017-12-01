const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
//const userRoutes = require("./routes/userrouters");
app.use(morgan('combined'));
// app.use(function(req,res,next){
//     console.log("Verify Some Token ");
//     //res.send("Invalid Request");
//     next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/login",(request,response)=>{
    const logger = require("./utils/log");

    logger.debug("Inside Login....");
    var userid = request.body.userid;
    var pwd = request.body.password;
    logger.debug("Userid Rec  "+userid +" and password is "+pwd);
    const User = require("./models/User");
    const userObject = new User(userid, pwd);
    const userHelper = require("./helpers/UserHelper");
    userHelper.checkLogin(userObject,response);

    
});
//app.use("/",userRoutes);
// app.use(function(req,res,next){
//     res.send("Invalid Request");
//     next();
// });

app.listen(1234,()=>{
    console.log("Server Start....");
});
module.exports = app;