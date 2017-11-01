function Controller() {
	this.request;
	this.response;
	this.next;
	this.info = [];
	this.info.view  = [];
	this.info.model = [];
	var _load = require("./loader.js");
	this.load = new _load();
	
}
module.exports = Controller;