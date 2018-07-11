var rm = document.getElementById("rm");
rm.onmousemove = function(){
	if(!document.getElementById)return false;
	if(!document.getElementById("rmright"))return false; 
	if(!document.getElementById("rm"))return false; 
	var rmleft = rm.x;
	var rmwidth = rm.width;
	var mouse_x = Window.event.clientX;
	var p1 = document.getElementById("p1");
	var p2 = document.getElementById("p2");
	var p3 = document.getElementById("p3");
	if(mouse_x <= rmleft+rmwidth/2){
		p1.style.display = "none";
		p3.style.display = "none";
		p2.style.display = "block";
	}
	if(mouse_x>rmleft+rmwidth/2){
		p1.style.display = "none";
		p2.style.display = "none";
		p3.style.display = "block";
	}
}; 