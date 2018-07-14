var init_table = init_table || {};
init_table=function(){
	if(!document.getElementById) return false;
    if(!document.getElementById("add")) return false;
    if(!document.getElementById("table")) return false;
    var add = document.getElementById("add");
    var table = document.getElementById("table");
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
        var loadrow = document.getElementById("loadrow");
        table.children[0].insertBefore(new_tr,loadrow);
    }
};

function addloadrow(){   //添加初始化行    + | 内容 | 完成情况
    var loadrow = document.createElement("tr");
    var pluscol = document.createElement("td");
    var plancol = document.createElement("td");
    var finishcol = document.createElement("td");
    loadrow.id = "loadrow";

    pluscol.colSpan = "1";
    var plus_a = document.createElement("a");
    plus_a.innerText = "+";
    plus_a.href = "#";
    plus_a.onclick = function(){
        addworkrow();
        return false;
    } //添加工作行
    pluscol.appendChild(plus_a);
    loadrow.appendChild(pluscol);

    plancol.colSpan = "24";
    plancol.innerText = "计划内容"
    loadrow.appendChild(plancol);

    finishcol.colSpan = "1";
    finishcol.innerText = "完成情况"
    loadrow.appendChild(finishcol);

    var table = document.getElementById("table");
    table.children[0].appendChild(loadrow);
}

function addworkrow(){  //正式的计划行     日期 | 计划内容 | 完成情况
    var workrow = document.createElement("tr");
    var timecol = document.createElement("td");
    var plancol = document.createElement("td");
    var finishcol = document.createElement("td");


    timecol.colSpan = "1";
    var time_a = document.createElement("a");
    time_a.innerText = "日期";
    //time_a.onclick =  添加一个正式的行
    timecol.appendChild(time_a);
    workrow.appendChild(timecol);

    plancol.colSpan = "24";
    var plan_a = document.createElement("a");
    plan_a.innerText = "计划内容";
    plan_a.href = "#";
    plan_a.onclick = function(){
        window.open("plan.html","","height=400,width=600,resizable=no")
    }
    plancol.appendChild(plan_a);
    workrow.appendChild(plancol);

    finishcol.colSpan = "1";
    var finish_a = document.createElement("a");
    finish_a.innerText = "完成情况";
    //finish_a.onclick =  添加一个正式的行
    finishcol.appendChild(finish_a);
    workrow.appendChild(finishcol);

    var loadrow = document.getElementById("loadrow");
    var table = document.getElementById("table").children[0];
    table.insertBefore(workrow,loadrow);
}


function addonlaod(func){
    var check=window.onload
    if(typeof check!="function"){
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
addonlaod(addloadrow);