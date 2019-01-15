var endNumber=0;
var allNumber=0;
var qipaiNumber=3;
//随机出数2-64
function getNumber(){
	var Number=Math.round(Math.random()*70);
	for(var i=0;i<1000;i++){
		if(Number==2 || Number==4 || Number==8 || Number==16 || Number==32 || Number==64){
			return Number;
			break;
		}else{
			Number=Math.round(Math.random()*70);
		}}}
//添加牌
function addNumber(){
	var Number=getNumber();
	var showing="<li value="+Number+" >"+Number+"</li>";
	$("#ul3").append(showing);
}
//li中添加
function addToLi(num){
	var cnum=num;
	switch(num){
		case 1:
			num="#li1_ul"; 
			break;
		case 2:
			num="#li2_ul"; 
			break;
		case 3:
			num="#li3_ul"; 
			break;
		case 4:
			num="#li4_ul"; 
			break;
	}
	var aa=$("#ul3 li:first-child").html();
	var showing2="<li>"+aa+"</li>";
	$(num).append(showing2);//li中添加牌
	judgePai(num);//判断相等
	cantMore(cnum);//判断是否满了
	removeNumber();//移除出牌
}
//更新得分
function gengxinNumer(sendNum){
		allNumber=parseInt(allNumber)+parseInt(sendNum); 
	$("#allnumbers").html("得分："+allNumber);
}
//封顶
function cantMore(num){
	var btnid;
	switch(num){
		case 1:
			num="#li1_ul li"; 
			btnid="btn1";
			break;
		case 2:
			num="#li2_ul li"; 
			btnid="btn2";
			break;
		case 3:
			num="#li3_ul li"; 
			btnid="btn3";
			break;
		case 4:
			num="#li4_ul li"; 
			btnid="btn4";
			break;
	}
			var iii=$(num).length;
			if(iii>=13){
				document.getElementById(btnid).setAttribute("disabled",true);
				endNumber++;
				console.log(endNumber);
				if(endNumber<4){
				}else{
					alert("游戏结束，得分"+allNumber+"，重玩请刷新页面！");
				}
			}
}
//删除备用牌
function removeNumber(){
	$("#ul3 li:first-child").slideUp(500,function(){ $("#ul3 li:first-child").remove(); });
	addNumber()
}
//弃牌
function sendPai(){
	if(qipaiNumber==0){
				document.getElementById("btn5").setAttribute("disabled",true);
	}else{
	qipaiNumber--;
	document.getElementById("btn5").innerHTML="弃牌次数："+qipaiNumber;
	removeNumber();}
}
//判断牌是否抵消
function judgePai(linum){
	var PaiNum1=$(linum+" li").eq(-1).html();//获取倒数第二张牌
	var PaiNum2=$(linum+" li").eq(-2).html();//获取倒数第一张牌
		if(PaiNum1!=undefined && PaiNum2!=undefined){
	if(PaiNum1==PaiNum2){
		//两牌相等 抵消
		var sum=PaiNum2*2;
		gengxinNumer(PaiNum1);//更新得分
		PaiRemove(linum)//抵消牌
		ADDNumber(linum,sum)//添加
			
		judgePai(linum);
	}
	}else{}
}
//抵消
function PaiRemove(linum){
	linums=linum+" li";  
	$(linums+":last-child").remove();
	$(linums+":last-child").remove();
}
//添加牌内容
function ADDNumber(num2,sum){
	if(sum==2048){
		qipaiNumber=3;
		$("#btn5").attr("disabled",false);
		document.getElementById("btn5").innerHTML="弃牌次数："+qipaiNumber;
	}else{
		$(num2).append("<li style='animation: myfirst .3s; -moz-animation: myfirst .3s; -webkit-animation: myfirst .3s;'>"+sum+"</li>");
	}
	
}function aa(){
		qipaiNumber=3;
		$("#btn5").attr("disabled",false);
	document.getElementById("btn5").innerHTML="弃牌次数："+qipaiNumber;
}
//d
function alerts(){
	alert("下方黑框为下一个放入的数字，点击数字下面的方块，将数字放入相应条框中，相同的数字可以相加，最高达到2048，条框装满即游戏结束");
}
//颜色判定--
function getColor(num){
	switch(num){
		case 2:
			break;
		case 4:
			console.log("s4")
			break;
		case 8:
			console.log("s4")
			break;
		case 16:
			console.log("s4")
			break;
		case 32:
			console.log("s4")
			break;
		case 64:
			console.log("s4")
			break;
	}
}
