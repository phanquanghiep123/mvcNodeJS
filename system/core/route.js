function Router(){
	//auto create route form url
	this.add = function ($Option,$midellwell = null){
		var c     = $Option.controller.toLowerCase().trim();
		var a     = $Option.action.toLowerCase().trim();
		var _this = this;
		_App[$Option.type]($Option.url,function(req,res,next){	
			if($midellwell != null) $midellwell();
			if($Option.midellwell != null) $Option.midellwell();
		    _Controller.request  = req;
		    _Controller.response = res;
		    _Controller.next     = next;
		    _this.make(c,a) ;
		    return true;
		});
	}
	this.group = function ($Path,$Option,$midellwell = null){
		var length = Object.keys($Option).length;
		var item;
		for (var i = 0 ;i < length; i++){
			item = $Option[i];
			item.url = $Path + item.url;
			this.add(item,$midellwell);
		}
	}
	this.make = function(c,a){
		var argUrrl = c.split("/");
		var $Controller = argUrrl[(argUrrl.length -1 )];
		var $Action     = a;
		_Controller.info.file = c;
		_Controller.info.controller = $Controller;
		_Controller.info.action     = $Action;
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
		var StringEval = "_Controller['"+$Controller+"']['"+$Action+"']("+stringP+");";
		_Controller.__construct();
		_Controller[$Controller].__construct();
		try {
			eval(StringEval.trim());
		} catch (e) {
			if (e instanceof SyntaxError) write(e.message);
			else write(e);
		}
		_Controller[$Controller].__destructors();
		_Controller.__destructors();	
	}
}
module.exports = Router;
