/**
 * Created by lxf on 16/3/3.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var manSchema = new Schema({
	name : String,
	age  :Number,
	home :String
});




//根据一个名字查询
manSchema.statics.findOne = function(data,cb){
	this.find({name:data},cb);
};
//查询全部
manSchema.statics.findAll = function(cb){
	  this.find({},cb);
};
//保存数据
manSchema.statics.save = function(data,cb){
	 this.create(data,cb);
}
var man_model = mongoose.model('man',manSchema);

module.exports = man_model;