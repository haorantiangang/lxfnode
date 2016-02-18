/**
 * Created by lxf on 16/2/18.
 */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.writeHead(301, {'Location': 'http://www.baidu.com/'});
	console.log(res._header);
	res.end();
});

module.exports = router;