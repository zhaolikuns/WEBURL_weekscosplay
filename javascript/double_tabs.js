$(function(){
	
		/*轮播图样式的重用*/
	var $louceng1 = $("#loucen1");
	var obj1 = $("#loucen1 .tabsNum li");
	var $are1 = $("#loucen1 ul.tab_list ");
	var $left1 = $("#loucen1 .tabs_left");
	var $right1 = $("#loucen1 .tabs_right");
	
	var $louceng2 = $("#loucen2");
	var obj2 = $("#loucen2 .tabsNum li");
	var $are2 = $("#loucen2 ul.tab_list ");
	var $left2 = $("#loucen2 .tabs_left");
	var $right2 = $("#loucen2 .tabs_right");
	
	var $louceng3 = $("#loucen3");
	var obj3 = $("#loucen3 .tabsNum li");
	var $are3 = $("#loucen3 ul.tab_list ");
	var $left3 = $("#loucen3 .tabs_left");
	var $right3 = $("#loucen3 .tabs_right");
	
	var $louceng4 = $("#loucen4");
	var obj4 = $("#loucen4 .tabsNum li");
	var $are4 = $("#loucen4 ul.tab_list ");
	var $left4 = $("#loucen4 .tabs_left");
	var $right4 = $("#loucen4 .tabs_right");
	
	function commonFlash( louceng , obj , are , left , right ){
		var $comIndex = 0;
		var timer = null;
		/*鼠标移动到区域暂停，离开继续*/
		$(louceng).hover(function(){
			clearInterval(timer)
		},function(){
			autoPlay();
		});
		/*鼠标移动到切换按钮*/
		obj.mouseover(function(){
			$comIndex = $(this).index();
			$(this).addClass("hover").siblings("li").removeClass("hover");
			are.animate({"left":($comIndex*-450)+"px"},200);
			clearInterval(timer);
		});
		
		left.click(function(){
			$comIndex--;
			if( $comIndex < 0 ){$comIndex = obj.length-1;}
			obj.eq($comIndex).addClass("hover").siblings("li").removeClass("hover");
			are.animate({"left":($comIndex*-450)+"px"},200);
		});
		right.click(function(){
			$comIndex++;
			if( $comIndex > obj.length-1 ){$comIndex = 0;}
			obj.eq($comIndex).addClass("hover").siblings("li").removeClass("hover");
			are.animate({"left":($comIndex*-450)+"px"},200);
		});
		left.hover(function(){
			$(this).css("background","#212120");
		},function(){
			$(this).css("background","");
		});
		right.hover(function(){
			$(this).css("background","#212120");
		},function(){
			$(this).css("background","");
		});
		
		autoPlay();
		function autoPlay(){
			timer = setInterval(function(){
				$comIndex++;
				if( $comIndex > obj.length-1 ){$comIndex = 0;}
				obj.eq($comIndex).addClass("hover").siblings("li").removeClass("hover");
				are.animate({"left":($comIndex*-450)+"px"},200);
			},2000);
		}
		
	}
	commonFlash( $louceng1 , obj1 , $are1 , $left1 , $right1 );
	commonFlash( $louceng2 , obj2 , $are2 , $left2 , $right2 );
	commonFlash( $louceng3 , obj3 , $are3 , $left3 , $right3 );
	commonFlash( $louceng4 , obj4 , $are4 , $left4 , $right4 );
	
	
	
	
	
	
	
});
