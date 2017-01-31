
define(function(require, exports, module) {

	var $ = require("jquery");

	$("#addTeacher").on("submit",function(){

		var formdata = $(this).serialize();

		$.ajax({
			url: '/teacher/add',
			type: 'POST',
			data: formdata
		})
		
		return fales;
	})
})