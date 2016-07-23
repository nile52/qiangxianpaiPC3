



for (i = 0; i < 3; i++) {
	$143(".select3 .clearList").append("<div class=\"selectedInfor selectedShow\" style=\"display:none\"><span></span><label></label><em></em></div>");
}

var refresh = "true";

$143(".listIndex a ").live("click",function(){
	var text =$143(this).text();
	var selectedShow = $143(".selectedShow");
	var textTypeIndex =$143(this).parents("div").index();
	var textType =$143(this).parents("ul").siblings("span").text();
	index = textTypeIndex -(2);
	$143(".clearDd").show();
	$143(".selectedShow").eq(index).show();
	$143(this).addClass("selected").siblings().removeClass("selected");
	selectedShow.eq(index).find("span").text(textType);
	selectedShow.eq(index).find("label").text(text);
	var show = $143(".selectedShow").length - $143(".selectedShow:hidden").length;
	if (show > 1) {
		$143(".eliminateCriteria").show();
	}
   
});
$143(".selectedShow em").live("click",function(){
	$143(this).parents(".selectedShow").hide();
	var textTypeIndex =$143(this).parents(".selectedShow").index();
	index = textTypeIndex;
	$143(".listIndex").eq(index).find("a").removeClass("selected");
	
	if($143(".listIndex .selected").length < 2){
		$143(".eliminateCriteria").hide();
	}
});

$143(".eliminateCriteria").live("click",function(){
	$143(".selectedShow").hide();
	$143(this).hide();
	$143(".listIndex a ").removeClass("selected");
}); 
