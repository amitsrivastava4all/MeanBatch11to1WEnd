var nodemailer = require("nodemailer");


var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
    }
});


var mailOptions = {
    from: "ram@test.com", // sender address
    to: "shyam@test.com, mike@test.com", // list of receivers
    subject: "this is just a test mail", // Subject line
    text: "Hello this is Plain Text", // plaintext body
    html: "<b>Hello this is html text </b>" // html body
}


smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

  
});