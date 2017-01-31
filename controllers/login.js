
var express = require('express');

var router = express.Router();

module.exports = router;

//设置路由
//用户路由
router.get('/',function(req,res){
	res.render('login/login',{})
});
