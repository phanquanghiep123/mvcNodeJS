function Autoload(argument) {
	this.setup      = require('./config/setup.js');
	this.express    = require('express');
	this.http       = require('./core/http.js');
	this.route      = require('./core/route.js');
	this.controller = require('./core/controller.js');
}
module.exports = Autoload;