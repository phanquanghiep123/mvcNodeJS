function Controller() {
    var _load = require("./loader.js");
	this.request;
	this.response;
	this.next;
	this.info = [];
	this.load = new _load();
	this.info.view  = [];
	this.info.model = [];	
}
module.exports = Controller;