const mongoose = require("mongoose");
var dbConfig = require("../../utils/config");
mongoose.connect(dbConfig.url);
module.exports = mongoose;