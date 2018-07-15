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
function addloadrow(){
    var loadrow = document.createElement('div');
    var pluscol = document.createElement('div');
    var plancol = document.createElement('div');
    var finishcol = document.createElement('div');

    loadrow.className = "work_row";
    loadrow.id = "loadrow";

    pluscol.className = "time";
    var plus_a = document.createElement("a");
    plus_a.innerText = "+";
    plus_a.href = "#";
    plus_a.onclick = addworkrow 
    pluscol.appendChild(plus_a);
    loadrow.appendChild(pluscol);

    plancol.className = "plan";
    loadrow.appendChild(plancol);

    finishcol.className = "finsih";
    loadrow.appendChild(finishcol);

    var table = document.getElementById("table");
    table.appendChild(loadrow);
}

function addworkrow(){
    var workrow = document.createElement('div');
    var timecol = document.createElement('div');
    var plancol = document.createElement('div');
    var finishcol = document.createElement('div');

    workrow.className = "work_row";

    timecol.className = "time";
    timecol.innerText = "日期";
    workrow.appendChild(timecol);

    plancol.className = "plan";
    plancol.innerText = "计划";
    workrow.appendChild(plancol);

    finishcol.className = "finsih";
    finishcol.innerText = "完成情况";
    workrow.appendChild(finishcol);

    var table = document.getElementById("table");
    var loadrow = document.getElementById("loadrow");
    table.insertBefore(workrow,loadrow);
}





addonlaod(addloadrow);