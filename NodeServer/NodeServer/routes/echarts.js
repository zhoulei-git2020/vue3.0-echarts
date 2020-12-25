var express = require('express');
var router = express.Router();


//允许跨域 
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        error:0,
        data:30,
    })
});

module.exports = router;