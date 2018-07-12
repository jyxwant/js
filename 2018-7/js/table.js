var init_table = init_table || {};
init_table=function(){
	if(!document.getElementById) return false;
    if(!document.getElementById("add")) return false;
    if(!document.getElementById("table")) return false;
    var add = document.getElementById("add");
    var table = document.getElementById("table");
    var a = document.getElementById("tr");
    add.onclick = function(){
        var new_tr = document.createElement("tr");
        var time_td = document.createElement("td");
        var plan_td = document.createElement("td");
        var finsh_td = document.createElement("td");
        var time = document.getElementById("time");
        var plan = document.getElementById("plan");
        var finsh = document.getElementById("finish");
        time_td.innerText = time.value;
        plan_td.innerText = plan.value;
        finsh_td.innerText = finsh.value;
        new_tr.appendChild(time_td);
        new_tr.appendChild(plan_td);
        new_tr.appendChild(finsh_td);
        table.children[0].appendChild(new_tr);
    }

    
    
};
function addonlaod(func){
    var check=window.onload
    if(typeof check!='function'){
        window.onload=func
    }
    else{
        window.onload=function(){
            check()
            func()
        }
    }
    
}
addonlaod(init_table);