function Cookie(name){
	this.name = name;
	this.isEaten = false;
	this.bakeCookie = function(){
		this.isEaten = false;
	};
	this.eatCookie = function(){
		this.isEaten = true;
	};


}

var pbCookie = new Cookie("pbCookie");
var ccCookie = new Cookie("ccCookie");