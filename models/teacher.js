
//处理teacher数据表的数据

var db = require('../config/db');

//下一步 通过db处理数据

//添加数据
exports.add = function (body, callback) {
	//body就是表单数据

	//数据库的插入操作
	db.query('INSERT INTO `teachers` SET ?', body, callback);
};

//查询全部数据
exports.show = function (callback) {
	//body就是表单数据

	//数据库的插入操作
	db.query('SELECT * FROM `teachers`', callback);
};

//查询单个数据
exports.find = function (tc_id, callback) {
	//根据讲师id查询数据
	var query = 'SELECT * FROM `teachers` WHERE tc_id = ' + tc_id;
	//数据库的插入操作
	db.query(query, callback);
};