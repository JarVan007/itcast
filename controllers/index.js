
var express = require('express');

var router = express.Router();

module.exports = router;

//设置路由
//主页路由
router.get('/',function(req,res){
	// res.send('hello nodejs');
	res.render('dashboard/index',{})
});

//设置页面路由
router.get('/settings',function(req,res){
	res.render('dashboard/settings',{})
});

//修改密码页面路由
router.get('/repass',function(req,res){
	res.render('dashboard/repass',{})
});