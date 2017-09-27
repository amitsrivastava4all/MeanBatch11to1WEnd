const User = require("./userschema.js");

const userOperations={

    add(userObject,response){

        User.create(userObject,function(error){
        if(error){
               response.send("Can't Add a New User"); 
        }
        else{
            response.send("Record Added...")
        }
        });
    },
    delete(){

    },
    search(userObject,response,request){
        var userid = userObject.userid;
        var password = userObject.password;
        console.log("UserObject is ",userObject);
        User.find({'userid':userObject.userid,'password':password},function(error,docs){
            if(error){
                response.send('Some Problem in DB Connection');
            }
            else{
                if(docs.length==0){
                    response.send('Invalid Userid or Password');
                }
                else{
                    request.session.uid=docs[0].userid;    
                    response.render('welcomeuser.ejs',{uid:request.session.uid});
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


	