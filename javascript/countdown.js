$(function(){
	
	
	//结束时间
	var endTime1 = new Date();
		endTime1.setFullYear(2016);
		endTime1.setMonth(4);
		endTime1.setDate(31);
		endTime1.setHours(23);
		endTime1.setMinutes(59);
		endTime1.setSeconds(59);
	var endtimes1 = endTime1.getTime();
	var obj1 = $(".time1 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes1 ,obj1 )
	} , 1000 );
	autoChange( endtimes1, obj1 );
	
	
	var endTime2 = new Date();
		endTime2.setFullYear(2016);
		endTime2.setMonth(4);
		endTime2.setDate(31);
		endTime2.setHours(23);
		endTime2.setMinutes(59);
		endTime2.setSeconds(59);
	var endtimes2 = endTime2.getTime();
	var obj2 = $(".time2 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes2 ,obj2 )
	} , 1000 );
	autoChange( endtimes2, obj2 );
	
	
	var endTime2 = new Date();
		endTime2.setFullYear(2016);
		endTime2.setMonth(3);
		endTime2.setDate(31);
		endTime2.setHours(23);
		endTime2.setMinutes(59);
		endTime2.setSeconds(59);
	var endtimes2 = endTime2.getTime();
	var obj2 = $(".time2 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes2 ,obj2 )
	} , 1000 );
	autoChange( endtimes2, obj2 );
	
	
	var endTime3 = new Date();
		endTime3.setFullYear(2016);
		endTime3.setMonth(3);
		endTime3.setDate(31);
		endTime3.setHours(23);
		endTime3.setMinutes(59);
		endTime3.setSeconds(59);
	var endtimes3 = endTime3.getTime();
	var obj3 = $(".time3 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes3 ,obj3 )
	} , 1000 );
	autoChange( endtimes3, obj3 );
	
	
	var endTime4 = new Date();
		endTime4.setFullYear(2016);
		endTime4.setMonth(3);
		endTime4.setDate(31);
		endTime4.setHours(23);
		endTime4.setMinutes(59);
		endTime4.setSeconds(59);
	var endtimes4 = endTime4.getTime();
	var obj4 = $(".time4 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes4 ,obj4 )
	} , 1000 );
	autoChange( endtimes4, obj4 );
	
	
	var endTime5 = new Date();
		endTime5.setFullYear(2016);
		endTime5.setMonth(2);
		endTime5.setDate(31);
		endTime5.setHours(23);
		endTime5.setMinutes(59);
		endTime5.setSeconds(59);
	var endtimes5 = endTime5.getTime();
	var obj5 = $(".time5 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes5 ,obj5 )
	} , 1000 );
	autoChange( endtimes5, obj5 );
	
	
	var endTime6 = new Date();
		endTime6.setFullYear(2016);
		endTime6.setMonth(3);
		endTime6.setDate(31);
		endTime6.setHours(23);
		endTime6.setMinutes(59);
		endTime6.setSeconds(59);
	var endtimes6 = endTime6.getTime();
	var obj6 = $(".time6 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes6 ,obj6 )
	} , 1000 );
	autoChange( endtimes6, obj6 );
	
	
	var endTime7 = new Date();
		endTime7.setFullYear(2016);
		endTime7.setMonth(3);
		endTime7.setDate(31);
		endTime7.setHours(23);
		endTime7.setMinutes(59);
		endTime7.setSeconds(59);
	var endtimes7 = endTime7.getTime();
	var obj7 = $(".time7 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes7 ,obj7 )
	} , 1000 );
	autoChange( endtimes7, obj7 );
	
	
	var endTime8 = new Date();
		endTime8.setFullYear(2016);
		endTime8.setMonth(3);
		endTime8.setDate(31);
		endTime8.setHours(23);
		endTime8.setMinutes(59);
		endTime8.setSeconds(59);
	var endtimes8 = endTime8.getTime();
	var obj8 = $(".time8 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes8 ,obj8 )
	} , 1000 );
	autoChange( endtimes8, obj8 );
	
	var endTime9 = new Date();
		endTime9.setFullYear(2016);
		endTime9.setMonth(3);
		endTime9.setDate(31);
		endTime9.setHours(23);
		endTime9.setMinutes(59);
		endTime9.setSeconds(59);
	var endtimes9 = endTime9.getTime();
	var obj9 = $(".time9 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes9 ,obj9 )
	} , 1000 );
	autoChange( endtimes9, obj9 );
	
	
	var endTime10 = new Date();
		endTime10.setFullYear(2016);
		endTime10.setMonth(3);
		endTime10.setDate(31);
		endTime10.setHours(23);
		endTime10.setMinutes(59);
		endTime10.setSeconds(59);
	var endtimes10 = endTime10.getTime();
	var obj10 = $(".time10 font");
	//自动播放
	setInterval( function(){
		autoChange( endtimes10 ,obj10 )
	} , 1000 );
	autoChange( endtimes10, obj10 );
	
	
	
	function autoChange(endtimes, obj){
		var nowTime = new Date();
	
		//相差的时间
		var s = (endtimes - nowTime.getTime())/1000;
		
		if( s>0 ){
			var day = Math.floor(s/86400);
			s = s%86400;
			var hours = Math.floor(s/3600);
				s = s%3600;
			var min = Math.floor(s/60);
				s = Math.floor(s%60);
				
			obj.eq(0).html(addTime( day , 2));
			obj.eq(1).html(addTime( hours , 2));
			obj.eq(2).html(addTime( min , 2 ));
			obj.eq(3).html(addTime( s , 2 ));
		}
		
	}
	

	
	
	
	
	//创建补0的方法
	function addTime( itime , num ){
		var str = "" + itime ;
		if( str.length < num ){
			str = "0" + itime;
		}
		return str;
	}
});
