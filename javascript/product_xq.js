$(function(){
	
	$("#xq_main .xq_left .xq_btn div img").mouseover(function(){
		$(this).addClass("xq_active").siblings().removeClass("xq_active");
		
		//获取图片的路径
		var addSrc = $(this).attr("src");
		
		$(".xq_left .xq_img img.xq_show_Img").attr("src",addSrc);
		$(".xq_left .paino img").attr("src",addSrc);
	});
	
	$(".xq_img").hover(function(){
		$(".paino , .xq_left .xq_move").show();
	},function(){
		$(".paino , .xq_left .xq_move").hide();
	});
	
		
		
	//放大镜效果
	$(".xq_left .xq_shade").mousemove(function(e){
		//鼠标距离浏览器的距离
		var x = e.pageX;
		var y = e.pageY;
		
		//遮罩层距离浏览器的距离
		var $width = $(this).offset().left;
		var $height = $(this).offset().top;
		
		//遮罩层宽高度的一半
		var $w = $("#xq_main .xq_left .xq_move").width() / 2;
		var $h = $("#xq_main .xq_left .xq_move").height() / 2;
		
		//移动层距离遮罩层的距离
		
		var _left = x - $width - $w;
		var _top = y - $height - $h;
		
		var w = $(this).width() - $w*2;
		var h = $(this).height() - $h*2;
		
		if(_left < 0){
			_left = 0;
		}else if(_left > w){
			_left = w;
		}
		if(_top < 0){
			_top = 0;
		}else if(_top > h){
			_top = h;
		}
		
		$("#xq_main .xq_left .xq_move").css({
			"left":_left,
			"top":_top
		});
		
		
		/*放大镜区域效果展示百分比*/
		var bfb_W = _left / $(this).width();
		var bfb_H= _top / $(this).height();
		
		var show_width = $(".paino img").width();
		var show_height = $(".paino img").height();
		
		$(".paino img").css({
			"left":-(bfb_W * show_width),
			"top":-(bfb_H* show_height)
		});
	});
	
	
	/*商品描述选项卡*/
	$("#xq_tab .xq_tab_ul li").mouseover(function(){
		/*li的index值，对应的是下面显示的div区域块*/
		var _index = $(this).index();
		
		$(this).addClass("active").siblings().removeClass("active");
		$("#xq_tab .xq_tab_show").eq(_index).show().siblings().hide();
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
