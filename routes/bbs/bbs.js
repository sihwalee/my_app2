var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
   var data = {name:'bbs get'};
    res.render('bbs/bbs.html',data);
});

module.exports = router;
