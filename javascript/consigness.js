$(function(){
	
	//省份
	function Province(){
		var html = " <option>---请选择省份---</option> ";
		for( var i in  province){
			html = html + " <option value='" + province[i].ProID + "'>"+ province[i].ProName +"</option> ";
		}
		$("#Province").append( html );
	}
	Province();
	
	//城市
	$("#Province").change(function(){
		var cityOption = " <option value=''>---请选择城市---</option> ";
		$("#City").children().remove();
		var _index = $(this).val();
		for( var j in city ){
			if( city[j].ProID == _index ){
				cityOption = cityOption + " <option value='"+ city[j].CityID +"'>" + city[j].CityName + "</option> ";
			}
		}
		$("#City").append(cityOption).show();
	});
	
	/*区县*/
	$("#City").change(function(){
		var areaOption =  " <option value=''>---请选择区县---</option> ";
		$("#Area").children().remove();
		var _index = $(this).val();
		for( var k in District ){
			if( _index == District[k].CityID ){
				areaOption =  areaOption + " <option value='" + District[k].Id +"'>" + District[k].DisName + "</option> ";
			}
		}
		$("#Area").append( areaOption ).show();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});
