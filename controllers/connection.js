
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://jogi:jogi@ds137340.mlab.com:37340/registers');

var userregisterSchema = mongoose.Schema({
	name: String,
    confirmpassword:String,
    email: String,
    password:String,
     });

var user = mongoose.model("register",userregisterSchema);
module.exports = user;