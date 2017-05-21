
$(function(){
	
	$("#accordion .Tabs ul li").mouseover(function(){
		var _index = $(this).index();
		$(this).stop().animate({"width":"544px"},300).siblings().stop().animate({"width":"51px"},300);
		$(".accordion-show .line-img-01").eq(_index).show().siblings().hide();
		$(this).find("h3").addClass("accordion-hover").parent().siblings().find("h3").removeClass();
	});
	
});
