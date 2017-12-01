const UserHelper={
    checkLogin(userObject,response){
        const logger = require("../utils/log");
        
            logger.debug("Inside Userhelper checklogin....");
        if(userObject.status=="L"){
            response.send("This Account is Locked.. ");
            return ;
        }
        // Call DB 
        logger.debug("Going to call DB Stuff");
       const userOperations =  require("../db/users/useroperations");
       userOperations.checkUser(userObject,response);
    }
}
module.exports = UserHelper;