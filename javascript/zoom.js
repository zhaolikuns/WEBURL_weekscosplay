$(function(){
	
	$(".zoom_shade1").hover(function(){
		$('.zoom_move1 , .zoom_bImg1').show();
	},function(){
		$('.zoom_move1 , .zoom_bImg1').hide();
	});
	
	
	$("#zoom_box1 span.zoom_shade1").mousemove(function(e){
		/*鼠标距离浏览器左边、上部的距离*/
		var x = e.pageX;
		var y = e.pageY;
		 
		/*遮罩层距离浏览器左边、上部的距离*/
		var l = $(this).offset().left;
		var t = $(this).offset().top;
		
		/*移动块的宽度和高度的一半*/
		var _w = $("#zoom_box1 span.zoom_move1").width()/2;
		var _h= $("#zoom_box1 span.zoom_move1").height()/2;
		
		/*移动块到遮罩层的高度和宽度*/
		var _left = x - l - _w;
		var _top = y - t - _h;
		
		if( _top < 0 ){
			_top = 0;
		}else if( _top > $(this).height()-_h*2 ){
			_top = $(this).outerHeight()-_h*2
		}
		if( _left < 0 ){
			_left = 0;
		}else if( _left > $(this).width()-_w*2 ){
			_left = $(this).outerWidth()-_w*2;
		}
		$("#zoom_box1 span.zoom_move1").css({"left":_left,"top":_top});
		
		/*移动块移动最大的区域*/
		var max_left = $("#zoom_box1 .zoom_sImg1 .zoom_shade1").width()-$("#zoom_box1 span.zoom_move1").width();
		var max_top= $("#zoom_box1 .zoom_sImg1 .zoom_shade1").height()-$("#zoom_box1 span.zoom_move1").height();
		
		
		/*移动块所占的比例*/
		var wbfb = _left / max_left;
		var hbfb =  _top  / max_top;
		document.title = wbfb + "," + hbfb;
		
		var bfb_width = ( $(".zoom_bImg1 img").width() - $(".zoom_bImg1").width() )*wbfb ;
		var bfb_height = ( $(".zoom_bImg1 img").height() - $(".zoom_bImg1").height() )*hbfb;
		$(".zoom_bImg1 img").css({"left":-bfb_width,"top":-bfb_height});
		
	});
	
	
	
	/*多放大镜效果 JQuery*/
	
	$(".zoom_sImg2").hover(function(){
		$(".zoom_move2 , .zoom_bImg2").show();
	},function(){
		$(".zoom_move2 , .zoom_bImg2").hide();
	});
	
	/*自定义了一个属性，以获取src路径，并把获取的路径添加到图片显示区域及大图标显示区域*/
	$(".zoom_btn .zoom_btn_hide img").hover(function(){
		$(this).addClass("zoom_active").siblings().removeClass("zoom_active");
		var addSrc = $(this).attr("dataSrc");
		$(".zoom_sImg2 img").attr("src",addSrc);
		$(".zoom_bImg2 img").attr("src",addSrc);
	},function(){});
	
	
$("#zoom_box2 .zoom_sImg2 span.zoom_shade2").mousemove(function(e){
		/*鼠标距离浏览器左边、上部的距离*/
		var x = e.clientX;
		var y = e.clientY;
		 
		/*遮罩层距离浏览器左边、上部的距离*/
		var l = $(this).offset().left;
		var t = $(this).offset().top;
		
		/*移动块的宽度和高度的一半*/
		var _w = $("#zoom_box2 .zoom_sImg2 span.zoom_move2").width()/2;
		var _h= $("#zoom_box2 .zoom_sImg2 span.zoom_move2").height()/2;
		
		/*移动块到遮罩层的高度和宽度*/
		var _left = x - l - _w;
		var _top = y - t - _h;
		
		if( _top < 0 ){
			_top = 0;
		}else if( _top > $(this).height()-_h*2 ){
			_top = $(this).outerHeight()-_h*2
		}
		if( _left < 0 ){
			_left = 0;
		}else if( _left > $(this).width()-_w*2 ){
			_left = $(this).outerWidth()-_w*2;
		}
		$("#zoom_box2 span.zoom_move2").css({"left":_left,"top":_top});
		
		/*移动块移动最大的区域*/
		var max_left = $("#zoom_box2 .zoom_sImg2 .zoom_shade2").width()-$("#zoom_box2 span.zoom_move2").width();
		var max_top= $("#zoom_box2 .zoom_sImg2 .zoom_shade2").height()-$("#zoom_box2 span.zoom_move2").height();
		
		
		/*移动块所占的比例*/
		var wbfb = _left / max_left;
		var hbfb =  _top  / max_top;
		
		
		var bfb_width = ( $(".zoom_bImg2 img").width() - $(".zoom_bImg2").width() )*wbfb ;
		var bfb_height = ( $(".zoom_bImg2 img").height() - $(".zoom_bImg2").height() )*hbfb;
		document.title = bfb_width + "," + bfb_height;
		$("#zoom_box2 .zoom_bImg2 img").css({"left":-bfb_width,"top":-bfb_height});
	
	});
	
	
	
	
	
	
	
	
	
	
	
});
