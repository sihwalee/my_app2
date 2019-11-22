var express = require('express');
var logger = require('morgan');
var app = express();

// router 설정
var indexRouter  = require('./routes/index.js');
var bbsRouter  = require('./routes/bbs/bbs.js');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
//app.set('views', __dirname + './views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
//ejs파일을 html로 전환
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
//app.use(express.static(__dirname + '/public'));

app.use('/',indexRouter); //루트
app.use('/bbs',bbsRouter); //bbs

app.listen(8080, function(){
	console.log('connected');
});
