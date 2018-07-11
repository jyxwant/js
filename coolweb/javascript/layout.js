var navigation = document.getElementById("navigation");
var logoimg = document.getElementById("logo");
var content = document.getElementById("content");
var img_width = logoimg.width;
var li_count = navigation.getElementsByTagName("a");
var movement;

for(var i = 0;i<li_count.length;i++){
	var li_child = li_count[i];
	li_child.style.width = img_width/li_count.length-2+"px";
}
navigation.style.width = ""+img_width+"px";
content.style.width = ""+img_width+"px";
var div_1 = document.getElementById("flex").getElementsByTagName("div")[0];
var a = logoimg.offsetLeft;
div_1.style.width = a;
div_1.style.height = window.getComputedStyle(navigation, null)["height"];
function highlightPage(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("navigation")) return false;
	var nav  =  document.getElementById("navigation");
	var links = nav.getElementsByTagName("a");
	for(var i = 0;i<links.length;i++){
		var linkurl = links[i].getAttribute("href");
		var currenturl = window.location.href;
		if(currenturl.indexOf(linkurl) != -1){
			links[i].className = "here";
		}
	}
}
function change(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var alink = navigation.getElementsByTagName("a");
	for(var i = 0;i<5;i++){
		alink[i].onmousemove = function(){
			i = this.innerText;
			logoimg.src = "image/"+i+".png";
		};
	}    
}

function addonlaod(func){
	var check = window.onload;
	if(typeof check != "function"){
		window.onload = func;
	}
	else{
		window.onload = function(){
			check();
			func();
		};
	}
    
}



function animation_rick(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var animationrick = document.getElementById("animation_rick");
	var animationmorty = document.getElementById("animation_morty");
	animationrick.onmouseover = function(){
		move1();		
	};
	animationrick.onmouseout = function(){
		clearTimeout(movement);
	};
	animationmorty.onmouseover = function(){
		move2();		
	};
	animationmorty.onmouseout = function(){
		clearTimeout(movement);
	};
}
var counti = 0;
var finalnumber = 15;
function move1(){
	var animationrick = document.getElementById("animation_rick");
	if(counti<2){
		animationrick.style.left = finalnumber+"%";
		finalnumber = finalnumber-0.1;
		counti = counti+1;
		var string = "move1()";
		movement = setTimeout(string, 100);		
	}
	else if(counti>0){
		animationrick.style.left = finalnumber+"%";
		finalnumber = finalnumber+0.1;
		counti = counti-1;
		string = "move1()";
		movement = setTimeout(string, 100);
	}
}
var counti_morty = 0;
var finalnumber_morty = 47;
function move2(){
	var animationmorty = document.getElementById("animation_morty");
	if(counti_morty<2){
		animationmorty.style.left = finalnumber_morty+"%";
		finalnumber_morty = finalnumber_morty-0.1;
		counti_morty = counti_morty+1;
		var string = "move2()";
		movement = setTimeout(string, 100);		
	}
	else if(counti_morty>0){
		animationmorty.style.left = finalnumber_morty+"%";
		finalnumber_morty = finalnumber_morty+0.1;
		counti_morty = counti_morty-1;
		string = "move2()";
		movement = setTimeout(string, 100);
	}
}

addonlaod(change);
addonlaod(highlightPage);
addonlaod(animation_rick);