//全屏爆炸回溯,二次伤害

function card4(){
	this.particles = [];
	this.partisize = 10;
	this.temp = 0;

	for(var i = 0; i < 10; i++){
		this.particles[i] = new Card4;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card4(){
	this.x = player.x;
	this.y = player.y;
	this.yv = 0;
	this.v = random()*30;
	this.rad = random()*-PI*2;
	this.time = 0;
	this.d ;
	this.color = "red";

	this.scl =3;

	this.move = function(){
		if(this.time > 60){
			this.x = this.x + (player.x - this.x)/(2*random());
			this.y = this.y + (player.y - this.y)/(2*random());
		}else if(this.time <= 60){
			this.x = this.x + this.v*cos(this.rad);
			this.y = this.y + this.v*sin(this.rad);
		}
		this.time++

		if (this.y >= (435-this.scl/2)) {
			this.yv = 0;
			this.v = 0;
		}	

			
	} 

	this.show = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.scl, this.scl)
	}
}