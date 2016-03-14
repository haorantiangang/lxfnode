/**
 * Created by lxf on 16/3/2.
 */
exports.setRequestUrl=function(app){

	var routes = require('./controllers/index');
	var users = require('./controllers/users');
	var rederect = require('./controllers/rederect');

	var man = require('./controllers/man');

	app.use('/', routes);
	app.use('/users', users);
	app.use('/rederect', rederect);
	app.post('/mans', man.postman);
	app.get('/mans', man.getman);
};