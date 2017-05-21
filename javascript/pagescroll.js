
$(function(){

	var _index = 0;
	var num = 1;
	var time = new Date();
	
	var $height = $("body").height();
	$(window).resize(function(){
		$height = $("body").height();
		$(document).scrollTop($height*_index);
	});
	
	$("html,body").stop(true).animate({"scrollTop": _index*$height + "px"},500,function(){
		$(".part").eq(_index).addClass("on");
	});
	
	$("#nav_floor ul li").mouseover(function(){
		_index = $(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".part").eq(_index).addClass('on').siblings().removeClass("on");
		$("html,body").stop(true).animate({"scrollTop":$height*_index + "px"},300,function(){
			$(".part").eq(_index).addClass("on");
		});
	});
	
	/*鼠标滚动的时候(浏览器右侧的滚动条已经hidden) 首先是一个鼠标事件event，其次是滚动的方向dir*/
		$(document).mousewheel(function(event,dir){
			var num = $("#nav_floor ul li").length;
			if(new Date() - time > 1000){
				time = new Date();
				if(dir < 0){
					_index++;
					_index%=num;
					console.log(_index)
				}else{
					_index--;
					if(_index<0)_index=num-1;
				}
				$("#nav_floor ul li").eq(_index).addClass('hover').siblings().removeClass("hover");
				$(".part").eq(_index).addClass('on').siblings().removeClass("on");
				$("html,body").stop(true).animate({"scrollTop": _index*$height + "px"},500,function(){
					$(".part").eq(_index).addClass("on");
				});
			}
		});
		
		
	
	/*刷新的时候返回头部*/
	setTimeout(function(){
		$(document).scrollTop(0);
	},300);
	
	
	
	$(".part_show ul li").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});
	
	
	
	
	/*芒果台TVB切换*/
	var arrW = [] , arrH = [] , arrL = [] , arrT = [] , arrZ = [] , arrO = [];
	var Time = new Date();
	$(".btn").click(function(i){
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
			arrO[i] = $(this).find("img").css("opacity");
		});
		
		$(".pic ul li").each(function(i){
			if( dec == 2 ){	
				var index = i - 1;
				if( index < 0 ){
					index = $(".pic ul li").length - 1;
				}
			}else{
				var index = i + 1;
				if( index > $(".pic ul li").length - 1 ){
					index = 0;
				}
			}
			$(this).find("img").animate({
				"opacity":arrO[index]
			},800);
			$(this).css("zIndex",arrZ[index]).animate({
				"width":arrW[index],
				"height":arrH[index],
				"left":arrL[index],
				"top":arrT[index]
			},800);
			
		});
	}
	
	
	/*自动切换*/
	var Timer = setInterval(function(){
		move(2);
	},3000);
	
	$(".part3_show").hover(function(){
		clearInterval(Timer);
	},function(){
		Timer = setInterval(function(){
			move(2);
		},3000);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
