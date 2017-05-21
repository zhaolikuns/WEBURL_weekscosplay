$(function(){
	
	$("input.css_psw").keyup(function(){
		if( $(this).val() =="" || $(this).val().length < 6 ){
			$("p.password_text label").addClass("tips");
			$("p.password_text label").show();
			$("p.col span#col1").addClass("col1");
		}else{
			$("p.password_text label").hide();
		}
		
		CheckPassword( $(this) );
		
	});
	
/**判断密码的强弱规则(自定义)
	1、如果是单一的字符（全是数字 或 字母 ）长度小于 6  弱
	2、如果是两两混合 (数字+字母（大小） 或 数字+特殊字符  或 特殊字符+字母  长度大于 8  中)
	3、如果是三者组合 (数字 +大写字母+小写字母 或 数字+字母+特殊字符 长度>8  强）)
**/
	
	//密码强弱判断函数
	function CheckPassword( obj_input ){
		//获取文本输入的值
		var oText = obj_input.val();
		//文本输入的长度
		var oLen = oText.length;
			
		//判断输入的是数字、字母、特殊字符，还是他们的结合体，以此来判定密码的强弱
		var maths = /\d/.test( oText );
		var smalls = /[a~z]/.test( oText );
		var bigs = /[A~Z]/.test( oText );
		var corps = /\W/.test( oText );
		var num = maths + smalls + bigs + corps;
		//开始判断 
		if( oLen < 1 ){
			Primary();
		}
		if( oLen <= 6 ){
			Weak();
		}
		if( oLen > 6 && oLen < 8 ){
			if( num == 1 ){
				Weak();
			}
			if( num == 2 ){
				Middum();
			}
		}
		if( oLen > 8 ){
			if( num == 1 ){
				Weak();
			}
			if( num == 2 ){
				Middum();
			}
			if( num == 3 ){
				Strong();
			}
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//全部都是灰色的
	function Primary(){
		$("span#col1").removeClass("col1");
		$("span#col2").removeClass("col2");
		$("span#col3").removeClass("col3");
	}
	
	//弱
	function Weak(){
		$("span#col1").addClass("col1");
		$("span#col2").removeClass("col2");
		$("span#col3").removeClass("col3");
	}
	
	//中
	function Middum(){
		$("span#col1").addClass("col1");
		$("span#col2").addClass("col2");
		$("span#col3").removeClass("col3");
	}
	
	//强
	function Strong(){
		$("span#col1").addClass("col1");
		$("span#col2").addClass("col2");
		$("span#col3").addClass("col3");
	}
	
	
});
