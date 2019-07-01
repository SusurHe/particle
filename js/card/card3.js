
function card3(){
	this.particles = [];
	this.partisize = 1000;
	this.temp = 0;

	for(var i = 0; i < 1000; i++){
		this.particles[i] = new Card3;
	}

	this.run = function(){
		for(var i = 0; i < this.partisize; i++){
			this.particles[i].move();
			this.particles[i].show();
		}
	}
}

function Card3(){
	this.x = player.x;
	this.y = player.y;
	this.yv = 0;
	this.v = random()*30;
	this.rad = random()*-PI/3+PI/6;
	this.time = 0;
	this.d ;
	this.color = "red";

	this.scl =3;

	this.move = function(){
		this.x = this.x + this.v*cos(this.rad);
		this.y = this.y + this.v*sin(this.rad);

		this.d = pow(this.x-player.x, 2) + pow(this.y-player.y , 2);
		if(this.d > 30000){
			this.color = "#28FF90";
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


	} 

	this.show = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.scl, this.scl)
	}
}