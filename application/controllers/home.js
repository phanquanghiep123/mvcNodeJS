_Controller.index = function(a,b){
	this.load.view("home.html",{"a":a,"b":b});
	this.load.model("members");
	this.members.getall();
	//this.load.model("products");
	//this.products.getall();
	//console.log(this);
	this.response.end();
}