$(function(){
	
	var arrW = [] , arrH = [] , arrL = [] , arrT = [] , arrZ = [] , arrO = [];
	var Time = new Date();
	
	
	
	$(".btn").click(function(){
		if( new Date() - Time > 800 ){
			Time = new Date();
			var _index = $(this).index();
			move(_index);
		}
		
	});
	
	function move( dec ){
		$(".pic ul li").each(function(i){
			arrW[i] = $(this).css("width");
			arrH[i] = $(this).css("height");
			arrL[i] = $(this).css("left");
			arrT[i] = $(this).css("top");
			arrZ[i] = $(this).css("zIndex");
			arrO[i] = $(this).css("opacity");	
		});
		var index = 0;
		$(".pic ul li").each(function(i){
			if( dec == 2 ){
				index = i -1 ;
				if( index < 0 ){
					index = $(".pic ul li").length - 1;
				}
			}else{
				index = i +1 ;
				if( index > $(".pic ul li").length  - 1 ){
					index = 0;
				}
			}
			$(this).find("img").animate({
				"opacity":arrO[index]
			},300);
			$(this).css("zIndex",arrZ[index]).animate({
				"width" : arrW[index],
				"height" : arrH[index],
				"left" : arrL[index],
				"top" : arrT[index]
			},300);
		});
	}
	
	
	//自动切换
	var Timer = setInterval(function(){
		move(2);
	},3000);
	
	$("#TVB-Areas").hover(function(){
		clearInterval(Timer);
	},function(){
		Timer = setInterval(function(){
			move(2);
		},3000);
	});
	
	
	
	
	
	
	
	
	
	
	
});
