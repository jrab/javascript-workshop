// var MySchemaModel = require('../models/mySchemaModel').MySchemaModel;

var loki = require('lokijs');
var db = new loki('data/users.json');

exports.read = function(req, res) {
	var id = req.params.id;

	// var query = MySchemaModel.findOne({uid: id});
	// query.exec(function(err, data) {
	// 	if (err) {
	// 		return res.send(404, err);
	// 	}

	// 	return res.send(200, {data: data});
	// });

	var users = db.getCollection('users');

	console.log(db);

	return res.send(200, users);
}

exports.create = function(req, res) {
	var data = req.body.data;

	// var newEntry = new MySchemaModel();
	// newEntry.field = data.field;

	// newEntry.save(function(err) {
	// 	if (err) {
	// 		return res.send(404, err);
	// 	}

	// 	return res.send(200, newEntry);
	// });

	return res.send(200);
}

exports.edit = function(req, res) {
	var data = req.body.data;

	// MySchemaModel.update({uid: data.uid},
	// 	{field: data.field},
	// 	function(err, nbRows, raw) {
	// 		if (err) {
	// 			return res.send(400);
	// 		}

	// 		return res.send(200);
	// 	}
	// );

	return res.send(200);
}

exports.delete = function(req, res) {
	var id = req.params.id;

	// var query = MySchemaModel.findOne({uid: id});
	// query.exec(function(err, data) {
	// 	if (err) {
	// 		return res.send(404, err);
	// 	}

	// 	if (data != null) {
	// 		data.remove();
	// 	}

	// 	return res.send(200);
	// });
	
	return res.send(200);
}