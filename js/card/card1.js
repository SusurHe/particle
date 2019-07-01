function card1(){
	this.particles = new Card1;

	this.run = function(){
		this.particles.move();
		this.particles.show();
	}
}

function Card1(){
	this.x = player.x;
	this.y = player.y;
	this.yv = 0;
	this.v = 20;
	this.rad = -PI/4;
	this.scl = 10;
	this.time = 0

	this.move = function(){
		this.x = this.x + this.v*cos(this.rad);
		this.y = this.y + this.v*sin(this.rad) + this.yv;
		this.yv = this.yv + g;
		this.time++;
		if(this.time % 2 == 0){
			this.scl++;
		}
		
		if(this.x < 0 && this.v *cos(this.rad) < 0){
			this.x = 1050;
		}else if(this.x > 1050 && this.v*cos(this.rad) > 0){
			this.x = 0;
		}

		if (this.y >= (435-this.scl/2)) {
			this.yv = 0;
			this.v = 0;
		}	

		this.y = constrain(this.y, -1000, 435-this.scl/2)
	}

	this.show = function(){
		fill(200);
		ellipse(this.x, this.y, this.scl, this.scl)
	}
}