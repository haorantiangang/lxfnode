/**
 * Created by lxf on 16/2/18.
 */



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var sreq = http.request({
		host:     'sneezryworks.sinaapp.com', // 目标主机
		path:     '/ip.php', // 目标路径
		method:   req.method // 请求方式
	}, function(sres){
		sres.pipe(res);
		sres.on('end', function(){
			console.log('done');
		});
	});
});

module.exports = router;



