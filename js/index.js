var lightNum=1;
function light(){
	lightNum++;
	var ifdo=lightNum%2;
	switch(ifdo){
		case 0: kaideng();
		break;
		case 1: guandeng();
		break;
	}
}
function kaideng(){
	$("#headernav").addClass("navbar-inverse");
	document.body.style.backgroundColor = '#555555';
	$("#Ilight").html("开灯");
	$("#sinput1").addClass("sinput1");
	$("#sinput2").addClass("sinput2");
}
function guandeng(){
	$("#headernav").removeClass("navbar-inverse");
	$("#Ilight").html("关灯");
	$("#sinput1").removeClass("sinput1");
	$("#sinput2").removeClass("sinput2");
	document.body.style.backgroundColor = 'white';
}

