
function skill(){
	sk1.run();
}


function Sk1(){
	this.particles = [];
	this.partsize = 1000;

	for(var i = 0; i < this.partsize; i++){
		this.particles[i] = new Particle;
	}

	this.run = function(){
		for(var i = 0; i < this.partsize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

class Particle{
	constructor(){
		this.x = player.x;
		this.y = player.y;
		this.yv = 0;

		this.v = random()*20+10;
		this.rad = random()*-PI;


	}

	move(){
		this.x = this.x + this.v*cos(this.rad);
		this.y = this.y + this.v*sin(this.rad) + this.yv
		this.yv = this.yv + g;

		if (this.x < 0 && this.v*cos(this.rad) < 0) {
			this.x = 1050;
		} else if(this.x > 1050 && this.v*Math.cos(this.rad) > 0){
			this.x = 0;
		}

		if (this.y >= 435){
			this.yv = -this.yv + 3;
			this.v = this.v - 3;
			this.rad = -this.rad;
			if(this.v < 0){
				this.v = 0;
			}

		}

		this.y = constrain(this.y , -1000, 435);
	}

	show(){
		fill("red");
		ellipse(this.x, this.y, 2, 2);
	}
}