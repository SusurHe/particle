
cards[0] ={
	radius : 0,
	cardId : 1,
		skillType : 0,  //0直线，1圆环
		name:null,
		coefficient :2.0,
		cost:3,
		cardDescribe:"卡牌1，为直线"
	};	

cards[1] ={
	radius : 200,
	cardId : 2,
		skillType : 1,
		name:null,
		coefficient :1.0,
		cost:2,
		cardDescribe:"卡牌2，为圆环爆炸"
};

cards[2] ={
	radius : 0,
	cardId : 10,
		skillType : 0,
		name:null,
		coefficient :2.0,
		cost:1,
		cardDescribe:"卡牌10，为直线"
};

cards[3] ={
	radius : 0,
	cardId : 14,
		skillType : 0,
		name:null,
		coefficient :3.0,
		cost:5,
		cardDescribe:"卡牌14，为直线"
};

cards[4] ={
	radius : 100,
	cardId : 5,
		skillType : 1,
		name:null,
		coefficient :2.0,
		cost:4,
		cardDescribe:"卡牌5，为圆环"
};


cardClose();

function changeCard(){
	
	$(".card").each(function(){
		
		$(this).css("background-image","url(img/cardS/cardS"+Math.floor(Math.random()*20+1)+".png)")
	})
	
}

function cardClose(){  //卡牌选择槽变为不可用
	$(".card").each(function(){
		$(this).css("background-image","url(img/cardS/cardS_null.png)");
	});
	$(".card").html("");
	cardSelected = -1;
	$(".card").unbind();
}

function cardReset(){  //卡牌选择槽初始化并且变为可用
	
	//此处应有ajax
	$(".card").each(function(){
		
		$(this).css("background-image","url(img/cardS/cardS"+cards[$(this)[0].id.substring(10)].cardId+".png)")
	})
	
	$(".card").each(function(){ //卡牌按钮初始化
		$(this)[0].tag=0;
	});
	
	$(".card").unbind();
	
	$(".card").click(function(){ //卡牌点击事件
		
		if($(this)[0].tag==0){
			var temp = $(this);
			
			$(this).html("<img src='img/cardS/selected.gif' style='position: absolute;width: 100%;height: 100%;'>");
			$(".card").each(function(){
				if($(this)[0].tag==1&&$(this)!=temp){  //如果有别的卡处于被选中状态，取消被选中
					$(this)[0].tag=0;
					$(this).html("");
				}
			});
			cardSelected = $(this)[0].id.substring(10);
			$("#cardDescribe").text(cards[cardSelected].cardDescribe);
			$(this)[0].tag=1;
			
			bulletFlag=false;
		}else{
			$(this)[0].tag=0;
			$(this).html("");
			cardSelected = -1;
		}
	});
	
	$(".card").mouseenter(function(){ //卡牌鼠标悬停发光事件
		if($(this)[0].tag==0){	
			$(this).html("<img src='img/selected.png' style='position: absolute;width: 100%;height: 100%;'>");
			if(cardSelected==-1){
				$("#cardDescribe").text(cards[$(this)[0].id.substring(10)].cardDescribe);
			}
		}
	});
	$(".card").mouseleave(function(){
		if($(this)[0].tag==0){
			$(this).html("");
			if(cardSelected==-1){
				$("#cardDescribe").text("");
			}
		}
	});
}

function mouseClicked(){ 
	if(mouseX<=1050&&mouseY<=560&&cardSelected>-1/*&&!clickFlag*/){
		//clickFlag=false;
		$(".card").each(function(){
			$(this)[0].tag=0;
			$(this).html("");
			});
		$("#cardDescribe").text("");
		if(cards[cardSelected].skillType==1){
			launch(1);
		}else{
			launch(0);
		}
		
		cardSelected = -1;
		cardClose();
	}
}