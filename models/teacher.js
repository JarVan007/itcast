
//处理teacher数据表的数据

var db = require('../config/db');


exports.add = function (body, callback) {
	//body就是表单数据

	//插入操作
	db.query('INSERT INTO `teacher` SET ?', body, callback);
};
//下一步 通过db处理数据