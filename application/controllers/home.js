_Controller.home = {
	__construct : function(){
		console.log("construct home ");
	},
	index : function(a,b){
		this.phoenix.load.view("home.html",{"a":a,"b":b});
		this.phoenix.response.end();
	},
	member : function(){
		write("<h1>PQH</h1>");
		this.phoenix.response.end();
	},
	__destructors : function(){
		console.log("destructors  home");
	}
	
}