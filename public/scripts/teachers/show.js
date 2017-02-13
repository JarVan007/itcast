
define(function(require, exports, module) {

	<!-- var $ = require("jquery"); -->

	var teacherModal = $("#teacherModal");

	$('#teacherList').on("click","a.preview",function () {
		teacherModal.modal();
		return false;
	});
})