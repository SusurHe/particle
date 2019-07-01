//连发子弹,弹道随机扩散

function card9(){
	this.particles = [];
	this.partisize = 1;
	this.temp = 0;

	for(var i = 0; i < 10; i++){
		this.particles[i] = new Card9;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
		if(this.temp%1 == 0){
			if(this.partisize < 100){
			 	this.partisize++;	
			}
		}
		this.temp++;
	}
}

function Card9(){
	this.x = player.x;
	this.y = player.y;
	this.yv = 0;
	this.v = 20;
	this.rad = -PI/4+random()*-PI/10;

	this.move = function(){
		this.x = this.x + this.v*cos(this.rad);
		this.y = this.y + this.v*sin(this.rad) + this.yv;
		this.yv = this.yv + g;

		if(this.x < 0 && this.v *cos(this.rad) < 0){
			this.x = 1050;
		}else if(this.x > 1050 && this.v*cos(this.rad) > 0){
			this.x = 0;
		}

		if (this.y >= 435) {
			this.yv = 0;
			this.v = 0;
		}

		this.y = constrain(this.y, -1000, 435);
	} 

	this.show = function(){
		fill(200);
		ellipse(this.x, this.y, 10, 10);
	}
}