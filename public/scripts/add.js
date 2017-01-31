
define(function(require, exports, module) {

	var $ = require("jquery");

	$("#addTeacher").on("submit",function(){

		//serialize()方法会忽略没有name属性的表单
		var formdata = $(this).serialize();

		$.ajax({
			url: '/teacher/add',
			type: 'POST',
			data: formdata,
			success: function (data) {
				alert(data.msg);
				if (data.code == 10000) {
					location.reload();
				}
			}
		});
		
		//阻止默认行为
		return false;
	})
})