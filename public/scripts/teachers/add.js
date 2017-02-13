
define(function(require, exports, module) {

	// var $ = require("jquery");

	require("validate");

	require("form");

	require("datepicker");
	
	require("language");

	$("#addTeacher").validate({
		onKeyup: true, //何种条件触发验证

		sendForm: false, //阻止表单默认提交

		eachInvalidField: function () {
			//当元素不合法的时候，触发此方法
			$(this).parents(".form-group")
			.removeClass('has-success')
			.addClass('has-error');

			$(this).next("span")
			.removeClass('glyphicon-ok')
			.addClass('glyphicon-remove');
		},
		eachValidField: function () {
			$(this).parents(".form-group")
			.removeClass('has-error')
			.addClass('has-success');

			$(this).next("span")
			.removeClass('glyphicon-remove')
			.addClass('glyphicon-ok');
		},
		valid: function () {
			//所有表单元素都合法 才触发
			//jquery.form.js专门ajax提交表单的插件
			var url = $(this).attr('action');
			$(this).ajaxSubmit({
				url: url,
				type: 'POST',
				success: function (data) {
					alert(data.msg);
					if (data.code == 10000) {
						location.reload();
					}
				}
			})
		}
	});

	// $("#addTeacher").on("submit",function(){

	// 	//serialize()方法会忽略没有name属性的表单
	// 	var formdata = $(this).serialize();

	// 	var url = $(this).attr('action');
		
	// 	$.ajax({
	// 		url: url,
	// 		type: 'POST',
	// 		data: formdata,
	// 		success: function (data) {
	// 			alert(data.msg);
	// 			if (data.code == 10000) {
	// 				location.reload();
	// 			}
	// 		}
	// 	});
		
	// 	//阻止默认行为
	// 	return false;
	// })
})