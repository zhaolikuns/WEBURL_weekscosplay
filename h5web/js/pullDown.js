$(function(){
	
	/*移动到nav导航菜单，出现下拉菜单*/
	$(".level1_lists").hover(function(){
		$(this).find("ul.level2").show();
	},function(){
		$(this).find("ul.level2").hide();
	});
	
	
});
