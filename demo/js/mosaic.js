$(function(){
	
//	点击登录注册
	$(".fm-right-navs a:nth-child(1)").click(function(){
		$(".shade").show()
		$(".login").fadeIn(1000)
	});
	
	//点击推荐、心情、场景、主播
	$(".fm-right-navs a:nth-child(3),.fm-right-navs a:nth-child(4),.fm-right-navs a:nth-child(5),.fm-right-navs a:nth-child(6)").toggle(function(){
		$(".fm-right").animate({"right":"0px"},500);
	},function(){
		$(".fm-right").animate({"right":"-350px"},500);
	});
	
	//点击关闭按钮
	$(".close").click(function(){
		$(".shade").hide()
		$(".login").fadeOut(1000)
	});
	//点击遮罩层
	$(".shade").click(function(){
		$(".shade").hide()
		$(".login").fadeOut(1000)
	});
	
	//点击按钮时切换
	$(".tuijian-tabs p span").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
