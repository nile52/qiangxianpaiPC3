

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


