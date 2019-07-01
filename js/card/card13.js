//连发直线 不扩散

function card13(){
	this.particles = [];
	this.partisize = 1;
	this.temp = 0;

	for(var i = 0; i < 10; i++){
		this.particles[i] = new Card13;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].a = 255 - i*20
			this.particles[i].r = 255/i;
			this.particles[i].g = i*25;
			this.particles[i].b = 100 + i*15;

			this.particles[i].scl = 20 - 1.5*i;

			this.particles[i].move();
			this.particles[i].show();
		}
		if(this.temp%1 == 0){
			if(this.partisize < 10){
			 	this.partisize++;	
			}
		}
		this.temp++;
	}
}

function Card13(){
	this.x = player.x;	//传入当前角色位置
	this.y = player.y;
	this.yv = 0;
	this.v = 25;
	this.rad = -PI/4;	//传入角度参数

	this.a = 255;
	this.r
	this.g
	this.b

	this.scl;

	this.move = function(){
		this.x = this.x + this.v*cos(this.rad);

		if (this.y >= 435) {
			this.yv = 0;
			this.v = 0;
		}

		this.y = constrain(this.y, -1000, 435);
	} 

	this.show = function(){
		fill(this.r,this.g,this.b, this.a);
		ellipse(this.x, this.y, this.scl, this.scl);
	}
}