
$(function(){
	
	$(".LoginAndRegester_title span").mouseover(function(){
		var _index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		
		$(".LoginAndRegester_con div").eq(_index).show().siblings().hide();
	});
	
	//用户注册验证用户名、邮箱、密码是否合法
	
	/*用户名验证*/
	$("input#user").keyup(function(){
		var $user = $(this).val();
		var reg = /^[a-zA-Z]\w{3,15}$/;
		var flg = reg.test($user);
		if( $user == "" ){
			$("#user_user").css("color","#c00");
		}else{
			$("#user_user").css("color","#666");
		}
		if( flg != true ){
			$("#user_user").css("color","#c00");
			return false;
		}
	});
	
	/*邮箱验证*/
	$("input#email").keyup(function(){
		var $email = $(this).val();
		var reg = /^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
		var flg = reg.test($email);
		if( flg != true ){
			$("#user_email").css("color","#c00");
			return false;
		}else{
				$("#user_email").css("color","#666");
		}
	});
	
	/*密码验证*/
	var $psw;
	$("input#psw").keyup(function(){
		$psw = $(this).val();
		var reg = /^[a-zA-Z]\w{5,15}$/;
		var flg = reg.test( $psw );
		if( $psw == "" ){
			$("#user_psw").css("color","#c00");
		}else{
			$("#user_psw").css("color","#666");
		}
		if( flg != true ){
			$("#user_psw").css("color","#c00");
			return false;
		}	
	});
	
	
	
	/*两次输入的密码是否一样*/
	$("#repsw").blur(function(){
		
		var t2 = $(this).val();		
		if( !($psw == t2) ){
			$("#user_repsw").css("color","#c00");
			return false;
		}else{
			$("#user_repsw").css("color","#666");
			return true;
		}	
	});
	
	
	
	
	
});
