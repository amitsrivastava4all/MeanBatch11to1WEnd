const express = require("express");
const User = require("../models/User");
const route = express.Router();
route.post("/login",(request,response)=>{
    var userid = request.body.userid;
    var pwd = request.body.password;
    const userObject = new User(userid, pwd);
    const userHelper = require("../helpers/UserHelper");
    userHelper.checkLogin(userObject,response);

    
});
// route.get("/",(request,response)=>{
//     response.sendFile(__dirname)
// })
module.exports = route;