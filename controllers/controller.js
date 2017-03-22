var bodyParser = require('body-parser');
var user_database = require('./connection.js');
// var crypto = require('./crypto');

var UserRegister = user_database;
exports.signup=function(req,res){
	var mail=req.body.email;
	UserRegister.find({email:mail},function(err,docs){
		if(err){
			console.log(err);
		}if(docs[0]==null){
			// var password = crypto.encrypted(req.body.password);
			// console.log(password);
			var user=new UserRegister({
			name:req.body.name,
			email:req.body.email,
			password:req.body.password,
			confirmpassword:req.body.confirmpassword,
		});
		console.log(user);
		user.save(function(err,data){
			if(err){
				console.log(err);
			}else{
				res.json(0);
				console.log("success");
			}
		});
		}else{
			res.json(1);
			console.log("email is already registered.");
		}
	});
	
}
exports.signin=function(req,res){
	UserRegister.find({email:mail},function(err,docs){
		if(err){
			console.log(err);
		}if(docs[0]!==null){
			res.json(0);
			console.log("successfully logged in.");
		}else{
			res.json(1);
			console.log("not registered yet.");
		}
	})
}