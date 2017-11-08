function Controller() {
	this.request;
	this.response;
	this.next = function(){
		this.response.next();
	}
	this.return = 0;
	this.wait = function(){
		this.return++;
	}	
	this.end = function(){
		this.response.end();
	}
	this.info = [];
	var _load = require("./loader.js");
	var _db = require('./db.js');
	this.load = new _load();
	this.db = new _db();	
	this.info.view       = [];
	this.info.model      = [];
	this.info.controller = [];
	this.__construct   = function(){console.log("__construct")}
	this.__destructors =  function(){
		do {
		    this.return--;
		}
		while (this.return > 0){
			this.end();
		}
		console.log("__destructors") ;
	}
	this.init = function($object){
		var that  = this[$object];
		delete this[$object];
		this[$object] = Object.assign(that,this);
		if(typeof this[$object].__construct === "undefined")
			this[$object].__construct = this.__construct;
		if(typeof this[$object].__destructors === "undefined")
			this[$object].__destructors = this.__destructors;
		return this[$object].phoenix;
	}

}
module.exports = Controller;