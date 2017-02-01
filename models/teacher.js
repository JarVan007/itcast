
//处理teacher数据表的数据

var db = require('../config/db');

//下一步 通过db处理数据

//添加数据
exports.add = function (body, callback) {
	//body就是表单数据

	//数据库的插入操作
	db.query('INSERT INTO `teachers` SET ?', body, callback);
};

//查询数据
exports.show = function (callback) {
	//body就是表单数据

	//数据库的插入操作
	db.query('SELECT * FROM `teachers`', callback);
};