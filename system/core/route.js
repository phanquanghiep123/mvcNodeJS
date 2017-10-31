function Router(){
	//auto create route form url
	this.add  = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		   _Controller.Request   = req;
		    _Controller.Response = res;
		    _Controller.Next     = next;
		    _this.make(c,a) ;
		});
	},
	this.addGet = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		    _Controller.Request  = req;
		    _Controller.Response = res;
		    _Controller.Next     = next;
		    _this.make(c,a) ;
		});
	},
	this.addPost = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		var _this = this;
		_App.get($Url,function(req,res,next){	
		    _Controller.Request  = req;
		    _Controller.Response = res;
		    _Controller.Next     = next;
		    _this.make(c,a) ;
		});
	},
	this.make = function(c,a){
		_Controller.Info.Controller = c;
		_Controller.Info.Action     = a;
		var params    = _Controller.Request.params;
		var stringP   = "";
		var argparams = [];
		for (var key in params){
			if(isNaN(params[key].trim()) == true) params[key] = '"'+params[key]+'"';
				if(params[key] != null && params[key].trim() != "");
					argparams.push(params[key].trim());
		}
		stringP = argparams.join(",");
		var StringEval = "_Controller['"+a+"']("+stringP+");"; 
		console.log(StringEval)
		require(_F_controler + c );
		eval(StringEval);

	}
}
module.exports = Router;
