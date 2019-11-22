var express = require('express');
var router = express.Router();



var data = {name:'이시화'};

router.get('/', function (req, res, next) {
    res.render('index.html',data);
});

module.exports = router;
