//跳刀

function card14(){
	this.rad = 0;	//传入角度参数

	player.x = player.x + 300*cos(this.rad);

	if(player.x >= 1050){
		player.x = 0+(player.x - 1050);
	}
	if(player.x <= 0){
		player.x = 1050 - (0 - player.x);
	}
}
