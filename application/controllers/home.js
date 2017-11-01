_Controller.prototype = {
	constructor: _Controller,
	home : {
		index : function(a,b){
			this.load.view("home.html",{"a":a,"b":b});
			this.load.model("members");
			this.members.getall();	
		}
	}
}