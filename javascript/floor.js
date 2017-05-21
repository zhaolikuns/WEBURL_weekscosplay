$(function(){
	
	/*左侧楼梯导航*/ 
	$("#floors ul li").not(".floor_li_last").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	mark = 1;
	$("#floors ul li").not(".floor_li_last").click(function(){
		mark = 2;
		$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		var _index = $(this).index();
		var $height = $("#warp div").eq(_index).offset().top;
		$("html,body").animate({"scrollTop":$height},300,function(){
			mark = 1;
		});
	});
	
	
	$(window).scroll(function(){
		if( mark == 1 ){
			
		
		/*页面滑动的距离*/
		var _scrollTop = $(this).scrollTop();
		
		var _index = $("#floors ul li").index();
		/*头部区域的高度*/
		var $Header_height = $("#Header").height()*1/3;
		
		if( _scrollTop >400 ){
			$("#floors").fadeIn();
		}else{
			$("#floors").fadeOut();
		}
		
		//首先获取区域块对象
		var obj = $("#warp div");
		obj.each(function(){
			var _index = $(this).index();
			var $div_top = obj.eq(_index).offset().top + $(this).height()/2;
			if( _scrollTop < $div_top ){
				$("#floors ul li").eq(_index).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
				return false;
			}	
		});
		
		}
	});
	
	
	
	
	
	
	
	
	
	/*Top返回顶部*/
	$("#floors ul li.floor_li_last").click(function(){
		setTimeout(function(){
			$(document).scrollTop(0);
		},30);
	});
	
	/*刷新时，返回顶部*/
	setTimeout(function(){
			$(document).scrollTop(0);
		},30);
	
	
});
