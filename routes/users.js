var express = require('express');
var router = express.Router();
var controller=require("../controllers/controller");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function(req, res, next) {
 controller.signup(req,res);
});
router.post('/login', function(req, res, next) {
 controller.signin(req,res);
});
module.exports = router;
