
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
	var query = 'SELECT * FROM `teachers` WHERE tc_status = ' + "0"; 
	db.query(query, callback);
};

//查询单个数据
exports.find = function (tc_id, callback) {
	//根据讲师id查询数据
	var query = 'SELECT * FROM `teachers` WHERE tc_id = ' + tc_id;
	//数据库的插入操作
	db.query(query, callback);
};

//更新单个数据
exports.edit = function (body, callback) {
	//id这个属性无法在数据库内更改所以先取出id值，再将该条属性删除修改的时候就不会修改该属性了
	var tc_id = body.tc_id
	delete body.tc_id;

	var query = 'UPDATE `teachers` SET ? WHERE tc_id = ' + tc_id;	
	db.query(query, body, callback);
};

//删除单个数据（修改tc_status的值）
//一般都是改变数据库中的一个状态码让其不显示不会真删除数据
exports.delete = function (body, callback) {
	//id这个属性无法在数据库内更改所以先取出id值，再将该条属性删除修改的时候就不会修改该属性了
	var tc_id = body.tc_id
	delete body.tc_id;
	var body = {tc_status:"1"};

	var query = 'UPDATE `teachers` SET ? WHERE tc_id = ' + tc_id;	
	db.query(query, body, callback);
};