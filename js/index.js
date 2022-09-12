var survey=document.createElement('div')
//survey.innerText='调查问卷'
//使用不一样的创建文本节点的方法
survey.innerHTML=('<span>调</span>查问<span>卷</span>');

document.styleSheets[0].insertRule('span {color:white}', 0);
//创建一个属性节点添加到div节点
// survey.setAttribute('id','dcwj')
//使用不一样的方法创建属性节点
var attr=document.createAttribute('id')
attr.nodeValue='dcwj'
survey.setAttributeNode(attr)
//document.body.appendChild(survey);
document.body.insertBefore(survey,document.body.container);
with(survey.style){
	background='rosybrown'
	height='100px'
	width='100px'
	fontSize='40px'
	textAlign='center'
	lineHeight='50px'
	
}
var timer;
//setInterval()是计时器,setTimeout()是延时器
survey.onclick=function(){
	//clearInterval(timer)
	 window.open('survey.html')
	//timer=setInterval(function(){
	//	console.log(Math.random())
	//},1000)
}
//
//clearInterval(timer)
//产生一个随机数
//[30,50]
//30+[0,20]=30+四舍五入[0,1)*20
function myrandom(min,max){
	return min+Math.round((max-min)*Math.random())
}
//使得div在视窗范围内的随机位置上出现
function position(){
	var pleft=myrandom(0,window.innerWidth-100)+'px'
	var ptop=myrandom(0,window.innerHeight-100)+'px'
	//survey.style.cssText+="left:"+pleft+";top:"+ptop+";position:absolute;"
	with(survey.style){
		left=pleft.toString()
		top=ptop.toString()
		position='absolute'
	}
	console.log(survey.style.cssText)
}
var poem=document.createElement("audio");
document.body.appendChild(poem);
var musicArray=new Array();
var urlArray=["media/jys.mp3","media/cx.mp3","media/hxs.mp3","media/tjs.mp3"];

var timer;
clearInterval(timer)
timer=setInterval(position,1000)
//timer=setInterval("position()",1000)
document.body.onclick=function(e){		
 var tag=e.target;
 if(tag.tagName=="H3"){
		
	var i=tag.id.substr(-1,1); 
	poem.setAttribute("src",urlArray[i]);//设置audio对象的src属性
	poem.play();//播放音频
	// tag.className+="change";
	tag.setAttribute("data-audio","已播放");
 }
}	
