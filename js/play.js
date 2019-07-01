class Player{
	constructor(){
		this.playerImg;
		this.x = 0;
		this.y = 100;
		this.v = random()*40;
		degree = -PI/6;
		this.yv = 0;

		this.d;

		this.hp = 1000;
		this.np = 100;
	}

	move(){
		this.x = this.x + this.v*Math.cos(degree);
		this.y = this.y + this.yv + this.v*Math.sin(degree);
		this.yv = this.yv + g;

		if(this.y >= 400){
			this.yv = 0;
			this.v = 0;
		}

		if(this.x < 0 && this.v*Math.cos(degree) < 0){
			this.x = 1050;
		}else if (this.x > 1050 && this.v*Math.cos(degree) > 0) {
			this.x = 0;
		}

		this.y = constrain(this.y,-1000,400);
	}

	show(){
		fill(200);
		image(this.playerImg, this.x, this.y ,35 ,35);
		//ellipse(this.x, this.y ,35 ,35);
	}
}

