const User = require("./userschema.js");

const userOperations={

    add(userObject,response){
        const logger = require("./logger");
        logger.debug("Inside Add first line ",userObject);
        var bcrypt = require('bcryptjs');
        
        var salt = bcrypt.genSaltSync(11);
        var hash = bcrypt.hashSync(userObject.password, salt);
        console.log("Hash is ",hash);
		userObject.password = hash;
        User.create(userObject,function(error){
        if(error){
               logger.error("Error Occur During Addition of New User",error);
               response.send("Can't Add a New User"); 

        }
        else{
            logger.debug("Record Added SuccessFully ");
            response.send("Record Added...");
        }
        });
    },
    delete(){

    },
    search(userObject,response,request){
         var bcrypt = require('bcryptjs');
        var userid = userObject.userid;
        var password = userObject.password;
        console.log("UserObject is ",userObject);
        User.find({'userid':userObject.userid},function(error,docs){
            if(error){
                response.send('Some Problem in DB Connection');
            }
            else{
                if(docs.length==0){
                    response.send('Invalid Userid or Password');
                }
                else{
                    if(bcrypt.compareSync(password, docs[0].password)) {
                    request.session.uid=docs[0].userid;    
                    response.render('welcomeuser.ejs',{uid:request.session.uid});
                }
                else{
                    response.send("Invalid Userid or password");
                }
                    //response.send('Welcome '+docs[0].userid);
                }
            }
        })
    },
    update(){
        User.findOneAndUpdate({userid: 'ram'}, {$set:{password:"99999"}},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    else{
    console.log('Record Updated',doc);
    }
});
    }
}
module.exports = userOperations;


	