
//自定义 seajs　配置文件
	seajs.config({
		base: "/assets",
		alias: {
			jquery: "jquery/jquery",
			validate: "jquery-validate/jquery-validate",
			form: "jquery-form/jquery-form",

			bootstrap: "bootstrap/js/bootstrap",
			datepicker: "bootstrap-datepicker/js/bootstrap-datepicker",
			language: "bootstrap-datepicker/js/bootstrap-datepicker.zh-CN.min",
			
			nprogress: "nprogress/nprogress",
			arttemplate: "art-template/template-native"
			
		},
		preload: ['/scripts/common', 'bootstrap']
	});
	
	seajs.use('/scripts/common');