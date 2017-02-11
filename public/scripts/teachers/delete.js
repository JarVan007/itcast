
define(function(require, exports, module) {

	var $ = require("jquery");

	$('#teacherList').on("click","a.delete",function () {

		var data = {tc_id:$(this).attr("tc-id")};

		console.log(data);

		$.ajax({
			url: "/teacher/delete",
			type: 'post',
			data: data,
			success: function (data) {
				alert(data.msg);
				if (data.code == 10000) {
					location.reload();
				}
			}
		});


		return false;
	});
})