var username=document.getElementById('username');
var pwd=document.getElementById('pwd');
var repwd=document.getElementById('repwd');
function checkUserName(){
	var valid=username.validity;
	username.setCustomValidity('');
	if(valid&&!valid.valid){
		//用户名为空
		if(valid.valueMissing){
			username.setCustomValidity('用户名不能为空');			
		}
		//用户名输入的不是11位手机
		else if(valid.patternMismatch){
			username.setCustomValidity('请输入11位的手机号码');
		}
		else{
			username.setCustomValidity('非法的用户名输入');			
		}
		username.focus();
		document.getElementById("msgusername").innerHTML = username.validationMessage;
		return false;
	}
	document.getElementById("msgusername").innerHTML = username.validationMessage;
	return true;
}
username.onblur=checkUserName;

function checkPassWord(){
	var valid=pwd.validity;
	pwd.setCustomValidity('');
	if(valid&&!valid.valid){
		//密码为空
		if(valid.valueMissing){
			pwd.setCustomValidity('密码不能为空!');			
		}		
		else{
			pwd.setCustomValidity('非法的密码输入!');
		}
		pwd.focus();
		document.getElementById("msgpwd").innerHTML = pwd.validationMessage;
		return false;
	}
	document.getElementById("msgpwd").innerHTML = pwd.validationMessage;
	return true;
}
pwd.onblur=checkPassWord;

function checkRePwd(){
	var valid=repwd.validity;
	repwd.setCustomValidity('');
	if(valid&&!valid.valid){
		//密码为空
		if(valid.valueMissing){
			repwd.setCustomValidity('密码不能为空!');			
		}		
		else{
			repwd.setCustomValidity('非法的密码输入!');
		}
		repwd.focus();
		document.getElementById("msgrepwd").innerHTML = repwd.validationMessage;
		return false;
	}
	else{
		if(repwd.value!=pwd.value){//密码与确认密码内容不一致
			repwd.setCustomValidity('两次密码输入不一致!');
			repwd.focus();
			document.getElementById("msgrepwd").innerHTML = repwd.validationMessage;
			return false;
		}
	}
	document.getElementById("msgrepwd").innerHTML = repwd.validationMessage;
	return true;	

}
repwd.onblur=checkRePwd;


var now=new Date();
var born=document.forms[0].born;
//格式化日，如果小于9，前面补0
var day = ("0" + now.getDate()).slice(-2);
//格式化月，如果小于9，前面补0
var month = ("0" + (now.getMonth() + 1)).slice(-2);
//拼装完整日期格式
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
//完成赋值
born.value=today;
function checkBorn(e){
	var valid=born.validity;
	born.setCustomValidity('');
	if(valid&&!valid.valid){
		//密码为空
		if(valid.valueMissing){
			born.setCustomValidity('出生年月不能为空!');			
		}		
		else {
			born.setCustomValidity('非法的出生年月输入!');
		}
		born.focus();
		document.getElementById("msgborn").innerHTML = born.validationMessage;
		return false;
	}
	document.getElementById("msgborn").innerHTML = born.validationMessage;
	return true;
}
born.onblur=checkBorn;
var email=document.forms[0].email;
function checkEmail(e){
	var valid=email.validity;
	email.setCustomValidity('');
	if(valid&&!valid.valid){
		//邮箱为空
		if(valid.valueMissing){
			email.setCustomValidity('邮箱不能为空!');				
		}
		else if(valid.typeMismatch){
			email.setCustomValidity('非法的邮箱格式!');
		}
		email.focus();
		document.getElementById("msgemail").innerHTML = email.validationMessage;
		return false;
	}
	else{
		var reg= /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		if(!reg.test(email.value)){
			email.setCustomValidity('非法的邮箱格式!');	
			email.focus();
			document.getElementById("msgemail").innerHTML = email.validationMessage;
			return false;
		}
	}
	document.getElementById("msgemail").innerHTML = email.validationMessage;
	return true;
}
email.onblur=checkEmail;

var age=document.forms[0].age;
function checkAge(e){
	var valid=age.validity;
	age.setCustomValidity('');
	if(valid&&!valid.valid){
		//年龄为空
		if(valid.valueMissing){
			age.setCustomValidity('年龄不能为空!');				
		}
		else if(valid.rangeOverflow||valid.rangeUnderflow){
			age.setCustomValidity('年龄值必须在0~150之间!');
		}
		else{
			age.setCustomValidity('非法的年龄格式!');
		}
		age.focus();
		document.getElementById("msgage").innerHTML = age.validationMessage;
		return false;
	}	
	document.getElementById("msgage").innerHTML = age.validationMessage;
	return true;
}
age.onblur=checkAge;

function checkGender() {
        var objsex = document.getElementsByName("sex");
        var flag = false;  
        for(var i=0; i<objsex.length; i ++){
            if(objsex [i].checked==true){
                flag = true;
            }
        }
        if (flag == false){  
            document.getElementById("msgage").innerHTML="对不起，请选择性别";
			return false;
        }
		return true;
}
var myform=document.forms[0];
myform.onsubmit=validateForm;

function validateForm(){
	var flag=true;
	var arr=[checkUserName(),checkPassWord(),checkRePwd(),checkBorn(),checkEmail(),checkAge(),checkGender()];
	arr.forEach(function(item,index,array){
		if(!item) flag=false;			
	});
	if(!flag) return false;	
}
pwd.onkeyup=function(e){
	var objs;
	objs=document.querySelectorAll('#pwdtable td');
	//对表格样式进行初始化
	// for(i=0;i<objs.length;i++){
	// 	objs[i].style.backgroundColor='transparent';
	// }
	//密码强度为弱
	if(pwd.value.length<6){
		objs=document.querySelectorAll('#pwdtable td:nth-child(-n+1)');
		objs[0].style.backgroundColor='red';
	}
	//密码强度为强
	else if(pwd.value.length>10&&/[A-Z]+/.test(pwd.value)){
		objs=document.querySelectorAll('#pwdtable td:nth-child(-n+3)');
		for(i=0;i<objs.length;i++){
			objs[i].style.backgroundColor='green';
		}		
	}
	//密码强度为中
	else{
		objs=document.querySelectorAll('#pwdtable td:nth-child(-n+2)')
		for(i=0;i<objs.length;i++){
			objs[i].style.backgroundColor='yellow';
		}		
	}
}
