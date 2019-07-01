//誓约胜利之剑
function card6(){
	this.particles = [];
	this.partisize = 2000;
	this.temp = 0;

	for(var i = 0; i < 2000; i++){
		this.particles[i] = new Card6;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card6(){
	this.x = player.x;
	this.y = player.y+3*random(-1, 2) ;
	this.yv = -randomGaussian()*10+5;
	this.v = 100*random();
	this.rad = 0;
	this.time = 0;

	this.a = 255;

	this.scl =3;

	this.move = function(){
		if(this.time < 10){

			this.x = this.x + this.v*cos(this.rad);
			if(this.v > 0){
				this.v= this.v;
			}
		}
		if(this.time > 10){
			this.y = this.y + this.yv;
			this.yv = this.yv ;	
		}

		if(this.y > 450 || this.y < 350){
				this.a = this.a - random()*50;
			}

		this.time++;

	} 

	this.show = function(){
		noStroke();
		fill(255, 255, 100, this.a);
		ellipse(this.x, this.y, this.scl, this.scl);
	}
}