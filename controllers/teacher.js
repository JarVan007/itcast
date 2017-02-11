
var express = require('express');

//引入讲师数据模型
var tcModel = require('../models/teacher')

var router = express.Router();

module.exports = router;

//设置路由
//讲师路由
router.get('/',function(req, res){
	//在渲染之前调用M，将M的数据放到对象中，显示到页面上
	//调用Model取数据
	tcModel.show(function (err, result) {
		if(err) return;
		
		res.render('teachers/index', {teachers: result});
	})
});

//显示添加讲师页面
router.get('/add',function(req, res){
	res.render('teachers/add',{})
});


//添加讲师功能
router.post('/add',function(req, res){
	var body = req.body;
	tcModel.add(body, function (err, result) {
		if(err) return;
		res.json({
			code: 10000,
			msg: "数据添加成功！",
			result: {}
		});
	});
});

//显示编辑页面
router.get('/edit/:tc_id',function(req, res){
	//获取讲师id
	var tc_id = req.params.tc_id;

	tcModel.find(tc_id, function (err, result) {
		if(err) return;
		
		res.render('teachers/add', {teacher: result[0]});
	})
});

//编辑讲师功能
router.post('/edit',function(req, res){
	var body = req.body;
	console.log(body);
	tcModel.edit(body, function (err, result) {
		if(err) return;
		res.json({
			code: 10000,
			msg: "数据修改成功！",
			result: {}
		});
	});
});

//删除讲师功能
//一般都是改变数据库中的一个状态码让其不显示不会真删除数据
router.post('/delete',function(req, res){
	var body = req.body;
	tcModel.delete(body, function (err, result) {
		if(err) return;
		res.json({
			code: 10000,
			msg: "删除成功！",
			result: {}
		});
	});
});
