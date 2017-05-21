
var canvas = document.getElementById("canvasClock");
var context = canvas.getContext("2d");

function drawClock(){
	context.clearRect(0,0,500,500);
	var now = new Date();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	hour += min/60;
	hour = hour>12?hour-12:hour;

	//画圆
	context.beginPath();
	context.lineWidth = 10;
	context.strokeStyle = "blue";
	context.arc(250,250,200,0,360,false);
	context.stroke();
	context.closePath();

	//画刻度
		//画时刻度
		for(var i=0;i<12;i++){
			context.save();
			context.translate(250,250);
			context.rotate(i*30*Math.PI/180);
			context.beginPath();
			context.lineWidth = 7;
			context.strokeStyle = "blue";
			context.moveTo(0,172);
			context.lineTo(0,192);
			context.stroke();
			context.closePath();
			context.restore();
		}

		//画分刻度
		for (var i = 0; i <60; i++) {
			context.save();
			context.translate(250,250);
			context.rotate(i*6*Math.PI/180);
			context.beginPath();
			context.lineWidth = 4;
			context.strokeStyle = "blue";
			context.moveTo(0,192);
			context.lineTo(0,182);
			context.stroke();
			context.closePath();
			context.restore();
		}

	//画时针、分针、秒针
		//画时针
		context.save();
		context.translate(250,250);
		context.rotate(hour*30*Math.PI/180);
		context.beginPath();
		context.lineWidth = 7;
		context.strokeStyle = "#000";
		context.moveTo(0,-145);
		context.lineTo(0,10);
		context.stroke();
		context.closePath();
		context.restore();

		//画分针
		context.save();
		context.translate(250,250);
		context.rotate(min*6*Math.PI/180);
		context.beginPath();
		context.lineWidth = 4;
		context.strokeStyle = "#000";
		context.moveTo(0,-165);
		context.lineTo(0,20);
		context.stroke();
		context.closePath();
		context.restore();

		//画秒针
		context.save();
		context.translate(250,250);
		context.rotate(sec*6*Math.PI/180);
		context.beginPath();
		context.lineWidth = 3;
		context.strokeStyle = "red";
		context.moveTo(0,-170);
		context.lineTo(0,25);
		context.stroke();

			//在时针、分针、秒针交汇处画圆
			context.beginPath();
			context.lineWidth=2;
			context.strokeStyle = "red";
			context.arc(0,0,5,0,360,false);
			context.fillStyle="gray";
			context.fill();
			context.stroke();
			context.closePath();

			//在秒针的头上加个圆环
			context.beginPath();
			context.lineWidth=2;
			context.strokeStyle = "red";
			context.arc(0,-145,5,0,360,false);
			context.fillStyle="gray";
			context.fill();
			context.stroke();
			context.closePath();



		context.closePath();
		context.restore();

}
drawClock();
setInterval(drawClock,1000);