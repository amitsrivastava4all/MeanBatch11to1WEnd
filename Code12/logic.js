function myLogic(response){
   // var result = "This is About Us Content , Coming from Some Logic";
    var fs = require("fs");
    var path = require("path");
    const chalk = require('chalk');
    console.log("CURRENT DIR PATH is ",__dirname);
   // var tempPath= path.normalize(__dirname+"/..");
    var fullPath = path.join(__dirname,'/files/content.txt');
    console.log(chalk.blue("Now Path is "+fullPath));
    fs.readFile(fullPath,function(error,content){
        if(error){
            response.send("Can't Read Path is Wrong");
            console.log(chalk.red("INVALID PATH ...."));
        }
        else{
            response.send(''+content);
            console.log(chalk.green("FILE READ DONE..."));
        }
    })
    //return result; 
}
module.exports = myLogic;