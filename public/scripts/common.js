define(function(require, exports, module) {

	var $ = require('jquery');

	var NProgress = require('nprogress');

	NProgress.start();
	NProgress.done();

	$(".navs a").on("click", function() {

		var _this = $(this);

		if (_this.attr("href") != "javascript:;") {
			return;
		}

		_this.next("ul").slideToggle();

	});
	$(".navs a").each(function() {
		var _this = $(this),
			pathname = location.pathname,
			href = _this.attr("href").slice(1);

		if (pathname.lastIndexOf(href) == 1) {
			_this.addClass("active");
			_this.next("ul").show();
			return;
		}
	})
})