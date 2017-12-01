const UserOperations = {
    checkUser(userObject,response){
            const UserModel = require("./userschema");
            const logger = require("../../utils/log");
            logger.debug("Inside Useroperations");
            UserModel.find({userid:userObject.userid,password:userObject.password},function(error, docs){
                response.setHeader('content-type', 'application/json');    
                if(error){
                        const er = {
                            errorCode:"DBF-101",
                            message:"DB FAIL DUE TO "
                        };
                         logger.error("SOme Error in DB ",error);
                        response.json(er);
                    }
                    else{
                        const message = {
                            msg:"",
                            code:"SUCCESS",
                            userid:""
                        };
                        if(docs.length>0){
                            message.msg ="Welcome";
                            message.userid = docs[0].userid;
                            logger.debug("WELCOME ",message);
                            response.json(message);
                            
                        }
                        else{
                            message.msg ="Invalid userid or Password ";
                            message.userid = null;
                            logger.debug("Invalid Docs ",docs);
                            response.json(message);
                        }
                    }
            });
    }
}
module.exports = UserOperations;