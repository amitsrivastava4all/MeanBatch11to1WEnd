const dbConfig = require("./config");

const mongoose = require("mongoose");

mongoose.connect(dbConfig.dbURL);

console.log("Connection Created....");

module.exports = mongoose;
