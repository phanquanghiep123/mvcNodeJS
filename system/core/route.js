function Router(){
	//auto create route form url
	this.add = function($Url,$Controller,$Action){
		var c = $Controller.toLowerCase().trim();
		var a = $Action.toLowerCase().trim();
		_App.get($Url,function(req,res,next){	 
			require(_F_controler + c );
			_Controller.prototype[a](1000); 
		});
	}
	//-----------------------------------------------Add custom route---------------------------------;
	require(_F_https + "route.js");
	//-----------------------------------------------!Add custom route---------------------------------;
}
module.exports = Router;
