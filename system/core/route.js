function Router(){
	//auto create route form url
	this.all  = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		    _Controller.request  = req;
		    _Controller.response = res;
		    _Controller.next     = next;
		    _this.make(c,a) ;
		});
	},
	this.get = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		    _Controller.request  = req;
		    _Controller.response = res;
		    _Controller.next     = next;
		    _this.make(c,a) ;
		});
	},
	this.post = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		    _Controller.request  = req;
		    _Controller.response = res;
		    _Controller.next     = next;
		    _this.make(c,a) ;
		});
	},
	this.make = function(c,a){
		_Controller.info.controller = c;
		_Controller.info.action     = a;
		var params    = _Controller.request.params;
		var stringP   = "";
		var argparams = [];
		for (var key in params){
			if(isNaN(params[key].trim()) == true) params[key] = '"'+params[key]+'"';
				if(params[key] != null && params[key].trim() != "");
					argparams.push(params[key].trim());
		}
		stringP = argparams.join(",");
		require(_F_controlers + c );
		_Controller.init(c);
		var StringEval = "_Controller['"+c+"']['"+a+"']("+stringP+");";
		_Controller.__construct();
		try {
			eval(StringEval.trim());
		} catch (e) {
			if (e instanceof SyntaxError) write(e.message);
			else write(e);
		}
		_Controller.__destructors();
		
	}
}
module.exports = Router;
