
var express = require('express');

var router = express.Router();

module.exports = router;

//设置路由
//用户路由
router.get('/',function(req,res){
	res.render('users/index',{})
});

router.get('/profile',function(req,res){
	res.render('users/profile',{})
});
