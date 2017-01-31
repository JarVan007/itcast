//第三方模块
var express = require('express');
var bodyParser = require('body-parser');

//加载子路由
var index = require('./controllers/index');
var user = require('./controllers/user');
var teacher = require('./controllers/teacher');
var login = require('./controllers/login');

var app = express();

//设置模板引擎
app.set('views', __dirname + '/views');

app.set('view engine', 'xtpl');

//设置body-parser插件中间件
app.use(bodyParser.urlencoded({ extended: false }));


//设置静态资源
app.use('/', express.static('public'));
app.use('/', express.static('uploads'));

//挂载子路由
app.use('/', index);
app.use('/user', user);
app.use('/teacher', teacher);
app.use('/login', login);


app.listen(3000, function() {
	console.log("服务已启动")
});