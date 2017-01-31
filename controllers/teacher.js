
var express = require('express');

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
