/**
 * Created by lxf on 16/3/2.
 */
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
exports.setRequestUrl=function(app){

	var routes = require('./controllers/index');
	var users = require('./controllers/users');
	var rederect = require('./controllers/rederect');

	var man = require('./controllers/man');
	var upfile = require('./controllers/upfile');

	app.use('/', routes);
	app.use('/users', users);
	app.use('/rederect', rederect);
	app.post('/mans', man.postman);
	app.get('/mans', man.getman);
	app.post('/upfile',upfile.upfile);
};