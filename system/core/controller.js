function Controller() {
	this.Request;
	this.Response;
	this.Next;
	this.Info = {};
	this.loadView = function( $file = "", $data = {}, $return = false){
		_Controller.Info.View.push([{file : $file,data : $data, return : $return}]);
		var view = _Phoenix.loadView($file, $data, $return);
		if($return) return view;
		else Response.sent(view);
	}
}
module.exports = Controller;