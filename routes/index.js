var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
   var data = {name:'메인 화면 입니다.'};
    res.render('index.html',data);
});

module.exports = router;
