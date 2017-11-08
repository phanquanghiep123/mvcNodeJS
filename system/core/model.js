function Model() {
	var _db = require('./db.js');
	this.db = new _db();
	this.__construct   = function(){console.log("__construct")}
	this.__destructors =  function(){console.log("__destructors")}
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
module.exports = Model;