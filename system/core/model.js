function Model() {
	this.info  = {};
	this.db    = {};
	this.table = {};
	this.__construct   = function(){console.log("__construct")}
	this.__destructors =  function(){console.log("__destructors")}
	this.init = function($object){
		this[$object].phoenix = this;
		try{
			if(typeof this[$object].__construct !== "undefined")
				this.__construct   = this[$object].__construct;
			if(typeof this[$object].__destructors !== "undefined")
				this.__destructors = this[$object].__destructors;
		}catch ($e){
			this.__construct   = this.__construct;
			this.__destructors = this.__destructors;
		}
		return this[$object].phoenix;
	}
}
module.exports = Model;