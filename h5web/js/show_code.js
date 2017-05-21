
$(function(){
	
	$("a.a_sow").click(function(){
		$("div.show_code").show();
	});
	
	$("div.show_code span").click(function(){
		$("div.show_code").hide();
		return false;
	});
	
});
