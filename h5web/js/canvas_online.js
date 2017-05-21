
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var flag = 0;
var startX;
var endX;
var startY;
var endY;
var lineWidth;


/*function selectStatus(array,num,style){
	for(var i=0;i<array.length;i++){
		if(i==num){
			if(style==1){
				array[i].style.border='1px solid #fff';
			}
			
		}else{
			if(style==1){
				array[i].style.border='1px solid #000';
			}
			
		}
	}
}*/




/*画图的数组*/
var drawLine = document.getElementById("drawLine");
var drawRect = document.getElementById("drawRect");
var drawArc = document.getElementById("drawArc");
var drawDBX = document.getElementById("drawDBX");

var drawArr = [drawLine,drawRect,drawArc,drawDBX];

/*颜色的数组*/
var black = document.getElementById("pblack");
var paintBlack = document.getElementById("paintBlack");
black = paintBlack;
var red = document.getElementById("red");
var paintRed = document.getElementById("paintRed");
red = paintRed;
var pink = document.getElementById("pink");
var paintPink = document.getElementById("paintPink");
pink = paintPink;
var blue = document.getElementById("blue");
var paintBlue = document.getElementById("paintBlue");
blue = paintBlue;
var orange = document.getElementById("orange");
var paintOrange = document.getElementById("paintOrange");
orange = paintOrange;
var gray = document.getElementById("gray");
var paintGray = document.getElementById("paintGray");
gray = paintGray;
var cyan = document.getElementById("cyan");
var paintCyan = document.getElementById("paintCyan");
paintCyan = cyan;
var white = document.getElementById("white");
var paintWhite = document.getElementById("paintWhite");
white = paintWhite;

var colors = [black,paintBlack,red,paintRed,pink,paintPink,blue,paintBlue,orange,paintOrange,gray,paintGray
				,cyan,paintCyan,white,paintWhite];



/*笔的数组*/
var pencil = document.getElementById("pencil");
var crayon = document.getElementById("crayon");
var eraser = document.getElementById("eraser");

var pens = [pencil,crayon,eraser];


function brush(num){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;

		context.beginPath();
		context.moveTo(startX,startY);
		flag = 1;
	}

	canvas.onmousemove = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;

		if(flag){
			context.lineTo(endX,endY);
			context.stroke();
		}
	}

	canvas.onmouseup = function(){
		flag = 0;
	}
	canvas.onmouseout = function(){
		flag = 0;
	}
}

function Rect(num){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;
	}
	canvas.onmouseup = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;
		context.beginPath();
		context.strokeRect(startX,startY,endX-startX,endY-startY);
		context.closePath();
	}
	canvas.onmousemove = null;
	canvas.onmouseout = null;
}

function Arc(num){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;
	}
	canvas.onmouseup = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;
		context.beginPath();
		context.arc(startX,startY,Math.sqrt(Math.pow((endX-startX),2)+Math.pow((endY-startY),2)),0,360,false);
		context.stroke();
		context.closePath();
	}
	canvas.onmousemove = null;
	canvas.onmouseout = null;
}

function pencils(num){
canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;
	}
	canvas.onmouseup = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;
		context.beginPath();
		context.arc(startX,startY,Math.sqrt(Math.pow((endX-startX),2)+Math.pow((endY-startY),2)),0,360,false);
		context.fill();
		context.closePath();
	}
	canvas.onmousemove = null;
	canvas.onmouseout = null;
}


function penss(num){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;

		context.beginPath();
		context.moveTo(startX,startY);
		flag = 1;
	}

	canvas.onmouseup = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;

		if(flag){
			context.lineTo(endX,endY);
			context.stroke();
			context.closePath();
		}
	}

	canvas.onmousemove = null;
	canvas.onmouseout = null;
}





/*清除画布*/
function clearAll(){
	context.clearRect(0,0,600,520);
}


/*设置线的宽度*/
function setlineWidth(num){
	switch(num){
		case 0:
			context.lineWidth = 1;
			break;
		case 1:
			context.lineWidth = 2;
			break;
		case 2:
			context.lineWidth = 3;
			break;
		case 3:
			context.lineWidth = 4;
			break;
		case 4:
			context.lineWidth = 5;
			break;
		case 5:
			context.lineWidth = 6;
			break;
		case 6:
			context.lineWidth = 7;
			break;
		case 7:
			context.lineWidth = 8;
			break;
		case 8:
			context.lineWidth = 9;
			break;
		case 9:
			context.lineWidth = 10;
			break;
		case 10:
			context.lineWidth = 11;
			break;
		case 11:
			context.lineWidth = 12;
			break;
		case 12:
			context.lineWidth = 13;
			break;
		case 13:
			context.lineWidth = 14;
			break;
		case 14:
			context.lineWidth = 15;
			break;
		case 15:
			context.lineWidth = 16;
			break;
		case 16:
			context.lineWidth = 17;
			break;
		case 17:
			context.lineWidth = 18;
			break;
		case 18:
			context.lineWidth = 19;
			break;
		case 19:
			context.lineWidth = 20;
			break;
	}
}


/*设置颜色*/
function setColor(obj,num){
	context.strokeStyle = obj.id;
	context.fillStyle = obj.id;
}	


/*橡皮擦*/
function erasers(){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;

		context.clearRect(
			startX-context.lineWidth,startY-context.lineWidth,
			context.lineWidth*2,context.lineWidth*2
			);
		flag = 1;
	}

	canvas.onmousemove = function(event){
		event = window.event?window.event:event;
		endX = event.pageX - this.offsetLeft;
		endY = event.pageY - this.offsetTop;

		if(flag){
			context.clearRect(
				endX-context.lineWidth,endY-context.lineWidth,
				context.lineWidth*2,context.lineWidth*2
			);
		}
	}

	canvas.onmouseup = function(){
		flag = 0;
	}
	canvas.onmouseout = function(){
		flag = 0;
	}
}

/*油漆桶*/
function paints(){
	canvas.onmousedown = function(event){
		context.fillRect(0,0,600,520);
		context.fillStyle = obj.id;
		context.fill();
	}

	canvas.onmousemove = null;

	canvas.onmouseup = null;
	canvas.onmouseout = null;
}

/*文字工具*/
function text(){
	canvas.onmousedown = function(event){
		event = window.event?window.event:event;
		startX = event.pageX - this.offsetLeft;
		startY = event.pageY - this.offsetTop;

		var textDemo = prompt("请输入文字","");
		if(textDemo != null){
			context.fillText(textDemo,startX,startY);
		}	

	}
	canvas.onmousemove = null;
	canvas.onmouseup = null;
	canvas.onmouseout = null;
}

/*放大镜*/
function scale(){
	var scaleDemo = parseInt(prompt("请输入缩放的比例",""));
	var scaleW = canvas.width*scaleDemo/100;
	var scaleH = canvas.height*scaleDemo/100;
	canvas.style.width = scaleW + "px";
	canvas.style.height = scaleH + "px";
}

/*保存画布*/
function saveimg(){
	var save = canvas.toDataURL();
	var strSub = save.substring(22);

	var data = document.getElementById("data");
	data.value=strSub;

	var form = document.getElementById("myForm");
	form.submit();
}