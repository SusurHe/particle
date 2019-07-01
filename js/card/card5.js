
function card5(){
	this.particles = [];
	this.partisize = 1000;
	this.temp = 0;

	for(var i = 0; i < 1000; i++){
		this.particles[i] = new Card5;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card5(){
	this.x = player.x + random()*100+200;
	this.y = player.y + 35;
	this.yv = -random()*40;
	this.v = random()*30;
	this.rad = random()*-PI/3+PI/6;
	this.time = 0;
	this.d ;
	this.color = "red";

	this.scl =3;

	this.move = function(){
		this.y = this.y + this.yv;
		this.yv = this.yv + g;

		if(this.x < 0 && this.v *cos(this.rad) < 0){
			this.x = 1050;
		}else if(this.x > 1050 && this.v*cos(this.rad) > 0){
			this.x = 0;
		}

		if (this.y >= (435-this.scl/2)) {
			this.yv = -this.yv + 10;
			
		}	

		this.y = constrain(this.y, -1000, 435);
	} 

	this.show = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.scl, this.scl)
	}
}