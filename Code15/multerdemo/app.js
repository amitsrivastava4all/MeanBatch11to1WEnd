var express = require('express');
var app = express();
var multer = require("multer");

app.use(express.static("public"));
var storage = multer.diskStorage({
    destination: function (req, file, uploadFn) {
        uploadFn(null, __dirname+'/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})
 
var upload = multer({ storage: storage })
 

 
app.post('/', upload.single('imageupload'),function(req, res) {
  res.send("File upload sucessfully.");
});

app.listen(9998,()=>{
	console.log("Server Start...");
})