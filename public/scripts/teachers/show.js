
define(function(require, exports, module) {

	// var $ = require("jquery");

	var template = require('arttemplate');

	var teacherModal = $("#teacherModal");
		
	$('#teacherList').on("click","a.preview",function () {

		var data = {tc_id:$(this).attr("tc-id")};

		$.ajax({
			url: "/teacher/preview",
			type: 'post',
			data: data,
			success: function (data) {
				var html = template("teacherTpl", data);

				teacherModal.find('table').html(html);

				teacherModal.modal();
			}
		});

		return false;
	});
})