
$(function(){
	
	//吸顶盒效果
	
	$(window).scroll(function(){
		var $height_top = $("#one").height();
		var _top = $(window).scrollTop();
		if( _top >= $height_top ){
			$("#header").addClass("gd");
			$(".Menu").css("display","none");
		}else{
			$("#header").removeClass("gd");
			$(".Menu").css("display","block");
		}
	});
	
	
	
	
	//关闭按钮
	$("#top .close").click(function(){
		$("#top").slideUp()
	});
	
	
	//header导航
	$("#header .navs ul li.nav").hover(function(){
		//获取每个li区域的宽度
		var $wid_li = $(this).width();
		var $left = $(this).position().left;
		$("#header .navs ul li.nav_last").css("width",$wid_li).show().stop().animate({"left":$left},200);
	},function(){
		$("#header .navs ul li.nav_last").hide();
	});
	
	
	//切换效果
	$(".tab").mouseover(function(){
		clearInterval(timer);
		$(".gt,.lt").show();
	});
	$(".tab").mouseout(function(){
		autoPlay();
		$(".gt,.lt").hide();
	});
	
	
	/*首页轮播图特效*/
	var $index = 0;
	var $qindex = 0;
	var timer = 0;
	$(".cricle span").mouseover(function(){
		$index = $(this).index();
		scrollPlay();
		
		$qindex = $index;
	});
	
	
	/*左右切换按钮效果*/
	$(".gt").click(function(){
		$index--;
		if($index < 0){$index = 5;$qindex=0;}
		scrollPlay();	
		$qindex = $index;
	});
	
	$(".lt").click(function(){
		$index++;
		if($index > 5){$index = 0;$qindex=5;}
		scrollPlay();
		$qindex = $index;
	});
	
	
	function scrollPlay(){
		$(".cricle span").eq($index).addClass("hover").siblings().removeClass("hover");
		if($index == 0 && $qindex == 5){
			$(".tabs img").eq($qindex).stop().animate({"left":"-820px"},300);
			$(".tabs img").eq($index).css("left","820px").stop().animate({"left":"0px"},300);
		}else if( $index == 5 && $qindex == 0 ){
			$(".tabs img").eq($qindex).stop().animate({"left":"820px"},300);
			$(".tabs img").eq($index).css("left","-820px").stop().animate({"left":"0px"},300);
		}else if( $index > $qindex ){
			$(".tabs img").eq($qindex).stop().animate({"left":"-820px"},300);
			$(".tabs img").eq($index).css("left","820px").stop().animate({"left":"0px"},300);
		}else if( $index < $qindex ){
			$(".tabs img").eq($qindex).stop().animate({"left":"820px"},300);
			$(".tabs img").eq($index).css("left","-820px").stop().animate({"left":"0px"},300);
		}
	}
	
	autoPlay();
	//自动轮播
	function autoPlay(){
		timer = setInterval(function(){
			$index++;
			if($index > 5){$index = 0;$qindex=5;}
			scrollPlay();
			$qindex = $index;
		},2000);
		
	}
	

	/*换一批*/
	$(".fresh").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#000");
	});
	

	/*内容展示区域*/
	var mark = 0;
	var product_time = null;
	$(".fresh").click(function(){
		product_auto();
	});

	function product_auto(){
		if(mark == 0){
			mark = 1;	
		}else{	
			mark = 0;
		}
		$(".product .imgList").eq(mark).show().siblings(".imgList").hide();
	}
	
	product_time = setInterval( product_auto , 5000 );
	
	$(".fresh , .imgList").hover(function(){
		clearInterval( product_time );
	},function(){
		product_time = setInterval( product_auto , 5000 );
	});
	
	
	
	
	//鲜花展示
	$(".flower_nav ul.level1 li:not('flow_nav')").mouseover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var $index = $(this).index();
		$('.flowerConRight .flowers_con').eq($index).show().siblings().hide();
	});
	
	$(".flowers_con ul.level2 li").hover(function(){
		$(this).find("p").stop().show();
	},function(){
		$(this).find("p").stop().hide();
	});
	
	
	//手风琴效果
	
	$(".flowerTab ul li").mouseover(function(){
		var $index = $(this).index(); //手风琴的下标
		$(this).stop().animate({"width":"439px"},300).siblings("li").stop().animate({"width":"50px"},300);
		$(this).find("h3").addClass("hover").parent().siblings().find("h3").removeClass();
		
		$(".flowerFlash div").eq($index).show().stop().siblings().hide();
		
	});
	
	
	/*QQ交谈*/
	
	var $QQHeight = $(window).height();
	$("a.qqTalk").css("top", $QQHeight/2 );
	
	$(".qqTalk").hover(function(){
		$(".qqTalk_right").stop().animate({"left":"-90px"},300);
		$(".qqTalk_show").css({"background-color":"#C81623","background-image":"url(Images/images.png)","background-position":"-48px -149px"});
		
	},function(){
		$(".qqTalk_right").stop().animate({"left":"35px"},300);
		$(".qqTalk_show").css({"background-color":"#7A6E6E","background-image":"url(Images/images.png)","background-position":"-48px -149px"});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
