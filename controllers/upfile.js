var log = require('../utils/logger.js');
var logger = new log.init("filelog.txt");
var multiparty = require('multiparty');
var fs = require('fs');
var upfile = function (req, res) {
	var form = new multiparty.Form({uploadDir: './public/file/'});
	form.on('error', function(err) {
		console.log('Error parsing form: ' + err.stack);
	});
	form.parse(req, function (err, fields, files){
		var filesTmp = JSON.stringify(files,null,2);
		if (err){
			console.log('parse error: ' + err);
			res.send("写文件操作失败。");
		}else {
			//res.send("文件上传成功");
			console.log('parse files: ' + filesTmp);
			var fileNameArr = Object.keys(files);
			var firstFilename = fileNameArr[0];
			var fileDataArr = files[firstFilename];
			console.log( typeof fileDataArr);
			console.log(fileDataArr);
			var fileData = fileDataArr[0];
			var uploadedPath = fileData.path;
			var dstPath = './public/file/' + fileData.originalFilename;
			fs.rename(uploadedPath, dstPath, function(err) {
				if (err){
					console.log("重命名文件错误："+ err);
				} else {
					console.log("重命名文件成功。");
				}
			});
		}
	});
	return res.json({
		code: 0,
		msg: 'ok ',
		data: "ok"
	});
}
module.exports = {
	upfile: upfile
};