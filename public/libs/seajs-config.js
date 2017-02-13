
//自定义 seajs　配置文件
	seajs.config({
		base: "/assets",
		alias: {
			jquery: "jquery/jquery",
			bootstrap: "bootstrap/js/bootstrap",
			validate: "jquery-validate/jquery-validate",
			form: "jquery-form/jquery-form",
		},
		preload: ['/scripts/common', 'bootstrap']
	});
	
	seajs.use('/scripts/common');