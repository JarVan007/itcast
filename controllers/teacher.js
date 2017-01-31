
var express = require('express');

//引入讲师数据模型
var tcModel = require('../models/teacher')

var router = express.Router();

module.exports = router;

//设置路由
//讲师路由
router.get('/',function(req,res){
	//在渲染之前调用M，将M的数据放到对象中，显示到页面上
	res.render('teachers/index',{})
});

router.get('/add',function(req,res){
	res.render('teachers/add',{})
});

router.post('/add',function(req,res){
	var body = req.body;
	tcModel.add(body, function (err,result) {
		if(err) return;
		console.log(result);
		res.json({
			code: 10000,
			msg: "数据添加成功！",
			result: {}
		});
	});
});
