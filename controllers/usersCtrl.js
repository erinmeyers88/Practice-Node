var user = require("../models/user");


module.exports = {
	index: function (req, res, next) {
		res.status(200).json(user);
	},
	
	show: function (req, res, next) {
		var requestedUser = user[req.params.id];
		res.status(200).json(requestedUser);
	},
	
	build: function (req, res, next) {
		user.push(req.body);
		res.status(200).json({messsage: "user added!"});
	},
	
	update: function (req, res, next) {
		var userToUpdate = user[req.params.id];
		userToUpdate.updated = true;
		user[req.params.id] = userToUpdate;
		res.status(200).json({message: "user updated"});		
	},
	
	destroy: function (req, res, next) {
		user.splice(req.params.id, 1);
		res.status(200).json({message: "user destroyed"});
	}
	
};