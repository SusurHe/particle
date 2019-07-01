//游戏主页面中间全局变量
var degree; //技能发射角度
var clickFlag=false;//用于游戏画面的点击判定

var bulletImg;
var bulletX=0; //子弹的坐标
var bulletY=0;
var bulletFlag = false; //画面中是否有子弹
var bulletDegree = 0;//子弹发射角度
var bulletRodegree=0; //子弹旋转特效角度


var circleImg; //
var circleFlag=false; //画面中是否有圆环
var circleRadius = 10;//圆环的半径
var perparedRadius= 0;//圆环最大半径

var cards = new Array(5); //卡牌卡组
var cardSelected = -1;//被选中的卡牌的编号,没有卡牌被选中则为-1
var arrowImg ;
var circleRImg;//圆形技能的范围图片

var player; 
var skill;

var g = 1;		// Gravity
var rad;
var huajiImg;

function setup(){
	let canvas = createCanvas(1050, 560);
	player = new Player;
	arrowImg = loadImage('img/arrow.png');
	bulletImg = loadImage('img/bullet.png');
	circleImg = loadImage('img/circle.png');
	circleRImg = loadImage('img/circleR.png');
	player.playerImg = loadImage('img/players/p1_walk02.png');
	huajiImg = loadImage('img/skill/huaji.png')
	frameRate(40);
}

function draw(){
	background(80);

	cardReset();
	player.show();
	player.move();

	skillRun(); //技能运行
	
}


