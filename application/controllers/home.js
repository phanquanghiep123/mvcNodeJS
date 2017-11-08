_Controller.home = {
	index : function(a,b){
		this.load.model("members");
		this.members.getall();
	},
	hello : function(a){
		write(a);
		this.response.end();
	},
	construct : function(){
		console.log("dsfsdfsdfsd");
	}
}