/**
 * Created by lxf on 16/3/3.
 */
//var express = require('express');
//var router = express.Router();
var log = require('../utils/logger.js');
var logger = new log.init("filelog.txt");
var Man = require('../models/test_modle_bean.js');
/* post users listing. */
//router.post('/', function (req, res) {
//	var reqdata = req.query;
//	var reqdatap = req.body;
//	console.log(reqdata);
//	console.log(reqdatap);
//	Man.create(req.body);
//	res.send('respond with a htr');
//});
//router.get(
//	'/', function (req, res) {
//		res.send('respond with a htrssss');
//	}
//)
var postman = function (req,res){
	var reqdata = req.query;
	var reqdatap = req.body;
	console.log(reqdata);
	console.log(reqdatap);
	Man.save(req.body,function(err,data){
		console.log(err);
		console.log(data.toString());
	});
	return res.json({
		code: 0,
		msg: 'ok ',
		data:"成功啦"
	});
}
var getman = function (req,res){
	var reqdata = req.query;
	if(reqdata.type === "1") //查询全部
	{
		Man.findAll(function(err,data){
			return res.json({
				code: 0,
				msg: 'ok ',
				data:data
			});
		})
	}else{
		Man.findOne(reqdata.name,function(err,data){
			return res.json({
				code: 0,
				msg: 'ok ',
				data:data
			});
		});
	}


}
module.exports = {
	postman:postman,
	getman:getman
};