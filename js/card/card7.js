//高速远距离霰弹

function card7(){
	this.particles = [];
	this.partisize = 10;
	this.temp = 0;

	for(var i = 0; i < 10; i++){
		this.particles[i] = new Card7;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card7(){
	this.x = player.x;
	this.y = player.y;
	this.yv = 0;
	this.rad = -PI/4 + random()*-PI/10;
	this.v = 25; 
	this.time = 0;

	this.a = 255;

	this.scl =10;

	this.move = function(){
		this.x = this.x + this.v*cos(this.rad);
		this.y = this.y + this.v*sin(this.rad) + this.yv;
		this.yv = this.yv + g;



		if(this.x < 0 && this.v *cos(this.rad) < 0){
			this.x = 1050;
		}else if(this.x > 1050 && this.v*cos(this.rad) > 0){
			this.x = 0;
		}	

		if (this.y >= (435-this.scl/2)) {
			this.yv = 0;
			this.v = 0;
		}	
	} 

	this.show = function(){
		noStroke();
		fill(255, 255, 100, this.a);
		ellipse(this.x, this.y, this.scl, this.scl);
	}
}