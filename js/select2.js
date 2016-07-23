

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {  
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
function D(id){
	return document.getElementById(id);
}







// <!-- 头部城市 -->
function showProvince(){
	D("selectProvince").onclick = showAllProvince;
	selectProvince();
}
function showAllProvince(){
	D("allProvince").style.display = "block";
	D("selectProvince").style.color = "#CCCCCC";
	D("selectProvince").style.backgroundPosition = "50px -17px";
}
function hideAllProvince(){
	D("allProvince").style.display = "none";
	D("selectProvince").style.color = "#e66140";
	D("selectProvince").style.backgroundPosition = "50px 5px";
}
function selectProvince(){
	var pro = D("allProvince").getElementsByTagName("li");
	var links;
	for(var i=0;i<pro.length;i++){
		links = pro[i].getElementsByTagName("a");
		for(var j=0;j<links.length;j++){
			links[j].onclick = function(){
				D("selectProvince").innerHTML = this.innerHTML;
				hideAllProvince();
			}
		}
	}
}
addLoadEvent(showProvince);



// <!-- 地区 -->

function showArea(){
	D("selectArea").onclick = showAllArea;
	selectArea();
}
function showAllArea(){
	D("allArea").style.display = "block";
	D("selectArea").style.color = "#CCCCCC";
	D("selectArea").style.backgroundPosition = "65px -18px";
}
function hideAllArea(){
	D("allArea").style.display = "none";
	D("selectArea").style.color = "#000";
	D("selectArea").style.backgroundPosition = "65px -3px";
}
function selectArea(){
	var pro = D("allArea").getElementsByTagName("li");
	var links;
	for(var i=0;i<pro.length;i++){
		links = pro[i].getElementsByTagName("a");
		for(var j=0;j<links.length;j++){
			links[j].onclick = function(){
				D("selectArea").innerHTML = this.innerHTML;
				hideAllArea();
			}
		}
	}
}
addLoadEvent(showArea);



// <!-- 类型 -->
function showType(){
	D("selectType").onclick = showAllType;
	selectType();
}
function showAllType(){
	D("allType").style.display = "block";
	D("selectType").style.color = "#CCCCCC";
	D("selectType").style.backgroundPosition = "65px -18px";
}
function hideAllType(){
	D("allType").style.display = "none";
	D("selectType").style.color = "#000";
	D("selectType").style.backgroundPosition = "65px -3px";
}
function selectType(){
	var pro = D("allType").getElementsByTagName("li");
	var links;
	for(var i=0;i<pro.length;i++){
		links = pro[i].getElementsByTagName("a");
		for(var j=0;j<links.length;j++){
			links[j].onclick = function(){
				D("selectType").innerHTML = this.innerHTML;
				hideAllType();
			}
		}
	}
}
addLoadEvent(showType);


// <!-- 特点 -->
function showFeature(){
	D("selectFeature").onclick = showAllFeature;
	selectFeature();
}
function showAllFeature(){
	D("allFeature").style.display = "block";
	D("selectFeature").style.color = "#CCCCCC";
	D("selectFeature").style.backgroundPosition = "65px -18px";
}
function hideAllFeature(){
	D("allFeature").style.display = "none";
	D("selectFeature").style.color = "#000";
	D("selectFeature").style.backgroundPosition = "65px -3px";
}
function selectFeature(){
	var pro = D("allFeature").getElementsByTagName("li");
	var links;
	for(var i=0;i<pro.length;i++){
		links = pro[i].getElementsByTagName("a");
		for(var j=0;j<links.length;j++){
			links[j].onclick = function(){
				D("selectFeature").innerHTML = this.innerHTML;
				hideAllFeature();
			}
		}
	}
}
addLoadEvent(showFeature);
