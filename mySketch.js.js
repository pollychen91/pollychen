//所有圓圈從正中間擴散
var colors = "8ecae6-219ebc-023047-ffb703-fb8500".split("-").map(a=>"#"+a)
class Ball{
	constructor(args){//預設值 ()內為接受參數
		this.r=args.r||random(150)//半徑數值大小//若r沒有傳參數過來則用預設值150
		this.p=args.p//{x:random(width),y:random(height)}//產生位置
		this.v={x:random(-1,1),y:random(-1,1)}//速度
		this.color=random(colors)
	}
	
	}

var ball
var balls=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<75;i++){
	ball=new Ball({p:{x:width/2,y:height/2}})//產生一個新的ball元件()內可傳餐數
	balls.push(ball)
}
}

function draw() {
	background(255);
	noStroke()
	for(var i=0;i<balls.length;i++){
	let ball =balls[i]
		fill(ball.color)
		circle(ball.p.x ,ball.p.y ,ball.r);
		ball.p.x+=ball.v.x
		ball.p.y+=ball.v.y
	
	}
}