function Loader(argument) {
	this.model = function($file){
		_Controller.info.model.push({file : $file});
		var model = require(_F_models + $file );
		_Model.init($file);
		var StringEval = "_Controller[_Controller.info.controller]."+$file+" = _Model."+$file+";";
		try {
			eval(StringEval.trim());
		} catch (e) {
			if (e instanceof SyntaxError) write(e.message);
				else write(e);
		}
		_Controller.wait();
		return true;
	}
	this.view = function( $file = "", $data = {}, $return = false){
		var dataload = {file : $file,data : $data, return : $return};
		_Controller.info.view.push(dataload);
		var view = _Phoenix.loadview($file, $data, $return);
		_Controller.wait();
		if($return) return view;
		else write(view);
		return true;
	}
	this.helper = function (){
		_Controller.next;
		return true;
	}
}
module.exports = Loader;