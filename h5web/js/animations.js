$(function(){
	
	$(".aniLeft").animate({"left":"0px","opacity":1},2000);
	$(".aniRight").animate({"right":"0px","opacity":1},2000);
	
	$(".aniLeft01").animate({"left":"0px","opacity":1},2000);
	$(".aniRight01").animate({"right":"0px","opacity":1},2000);
	
	setInterval(function(){
		$(".sec-left").animate({"background-position-x":"200px"},2000,function(){
			$(this).animate({"background-position-x":"-30px"},10);
		});
	},4000);
	
	/*$(window).scroll(function(){
		if( $(document).scrollTop() > 100 ){
			$(".bsMain_right").css({"position":"fixed","top":"100px","right":"0px"});
		}
	})*/
	
});