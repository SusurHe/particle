
function card2(){
	this.particles = [];
	this.partisize = 1000;
	this.temp = 0;

	for(var i = 0; i < 1000; i++){
		this.particles[i] = new Card2;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card2(){
	this.x = player.x;
	this.y = player.y;
	this.yv = -random()*16-3;
	this.v = 60;
	this.rad = 0+random()*2*PI;
	this.time = 0;

	this.scl =3;

	this.move = function(){
		if(this.time < 10){

			this.x = this.x + this.v*cos(this.rad);
			if(this.v > 0){
				this.v= this.v - 6;
			}
		}else if(this.time > 12){
			this.y = this.y + this.yv;
			this.yv = this.yv + g;
		}

		this.time++;

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
		fill("red");
		ellipse(this.x, this.y, this.scl, this.scl)
	}
}