var express = require('express');
var router = express.Router();



var data = {name:'bbs get'};

router.get('/', function (req, res, next) {
    res.render('bbs/bbs.html',data);
});

module.exports = router;
