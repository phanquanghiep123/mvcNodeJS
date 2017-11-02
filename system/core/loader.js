function Loader(argument) {
	this.model = function($file){
		_Controller.info.model.push({file : $file});
		var model = require(_F_models + $file );
		var StringEval = "_Controller."+$file+" = _Model."+$file+";";
		eval(StringEval);
		return true;
	}
	this.view = function( $file = "", $data = {}, $return = false){
		var dataload = {file : $file,data : $data, return : $return};
		_Controller.info.view.push(dataload);
		var view = _Phoenix.loadview($file, $data, $return);
		if($return) return view;
		else _Controller.response.write(view);
		return true;
	}
	this.helper = function (){
		return true;
	}
}
module.exports = Loader;