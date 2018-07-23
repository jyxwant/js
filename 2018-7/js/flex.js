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
    plancol.onclick = div_onclick;
    plancol.child_array = new Array();
    workrow.appendChild(plancol);

    finishcol.className = "finsih";
    finishcol.innerText = "完成情况";
    workrow.appendChild(finishcol);

    var table = document.getElementById("table");
    var loadrow = document.getElementById("loadrow");
    table.insertBefore(workrow,loadrow);
}


/*function child_node(data, next){
    data1 = null;
    data2 = null;
    ahead = null;
    next = null;
} //链表结构头结点
function node_array(){//链表需要完成的功能 1.删除某个节点 2.添加某个节点 3.查找，索引
    var head = new child_node();
    var last = new child_node();
}*/
/*node_array.addnode() = function(node){
    if(head.next == null){
        head.next = node;
        node.ahead = head;
        last = node;
    }else{
        node.ahead = last;
        last.next = node;
        last = node;
    }
}
node_array.delete() = function(node){
    var ahead_node = node.ahead;
    var next_node = node.next;
    ahead_node.next = node.next;
    node.ahead = null;
    node.next = null;
}
node_array().num() = function(num){
    var i;
    for (i=0;i<num;i++){
         
    }
}*/


//实现点击获取左边位置
function div_onclick(){   // 这个是为了实现点击div来分割div
    //首先的情况是没有分配任何任务时候的情况
    
    if(this.innerText == ""){
    //首先获取plan行左侧的坐标x值，为后来的计算比例做准备
    var child_letf = event.clientX;
    var father_width = this.getBoundingClientRect().right - this.getBoundingClientRect().left; //计算宽度
    var child_width =  child_letf - this.getBoundingClientRect().left;
    var child_ratio = child_width/father_width;
    var child_new = document.createElement("div");
    child_new.style.flex = "" + child_ratio * 100;
    var child_a = document.createElement("a");
    child_a.innerText = clock_change(0, child_ratio);
    child_a.onclick = function(){
        var obj = window.open("plan.html",this.innerText,"channelmode=no,toolbar=no, location=yes," + 
        "directories=yes, status=no, menubar=yes, scrollbars=no," + 
        "resizable=no, copyhistory=yes, width=400, height=400");
        var title = this.innerText;
        setTimeout(function(){obj.document.title = title;},1000);
        event.cancelBubble=true;
    }
    child_new.appendChild(child_a);
    this.appendChild(child_new);
    this.child_array[0] = 0;
    var child_new1 = document.createElement("div");
    child_new1.style.flex = (1 - child_ratio) * 100 + "";
    child_new1.style.backgroundColor = "#888";
    var child_a1 = document.createElement("a");
    child_a1.innerText = clock_change(child_ratio, 1);
    child_new1.appendChild(child_a1);
    this.appendChild(child_new1);
    this.child_array[1] = child_ratio;
    }
    else{ //在已有节点的情况下需要借助到链表结构（或者顺序表结构）
        //首先获取plan行左侧的坐标x值，为后来的计算比例做准备
        var child_letf = event.clientX;
        var father_width = this.getBoundingClientRect().right - this.getBoundingClientRect().left; //计算宽度
        var child_width =  child_letf - this.getBoundingClientRect().left;
        var child_ratio = child_width/father_width;
        var array_size = this.child_array.length;
        
        var i = 0;
        for (i = 0;i < array_size;i++){
            if(this.child_array[i] > child_ratio){
                this.child_array.splice(i,0,child_ratio);
                break;
            }
        }
        if(i == array_size){//那就插到最后
            this.children[i-1].style.backgroundColor = "#fff";
            this.child_array.splice(i,0,child_ratio);
        }
        //先创建一个div
        var child_new = document.createElement("div");
        var child_new_a = document.createElement("a");
        if(i == array_size){
            child_new.style.flex = (1-this.child_array[i]) * 100 + "";
            this.children[i-1].style.flex = (this.child_array[i] - this.child_array[i-1]) * 100 + "";
            this.children[i-1].getElementsByTagName("a")[0].innerText = clock_change(this.child_array[i-1], this.child_array[i]);
            child_new_a.innerText = clock_change(this.child_array[i], 1);
            child_new.appendChild(child_new_a);
            this.children[i-1].getElementsByTagName("a")[0].onclick = function(){
                var obj = window.open("plan.html",this.innerText,"channelmode=no,toolbar=no, location=yes," + 
                "directories=yes, status=no, menubar=yes, scrollbars=no," + 
                "resizable=no, copyhistory=yes, width=400, height=400");
                var title = this.innerText;
                setTimeout(function(){obj.document.title = title;},1000);
                event.cancelBubble=true;
            }
            this.appendChild(child_new);

        }else{
            child_new_a.onclick = function(){
            var obj = window.open("plan.html",this.innerText,"channelmode=no,toolbar=no, location=yes," + 
            "directories=yes, status=no, menubar=yes, scrollbars=no," + 
            "resizable=no, copyhistory=yes, width=400, height=400");
            var title = this.innerText;
            setTimeout(function(){obj.document.title = title;},1000);
            event.cancelBubble=true;
            }
            child_new.style.flex = (this.child_array[i]-this.child_array[i-1]) * 100 + "";
            this.children[i-1].style.flex = (this.child_array[i] - this.child_array[i-1]) * 100 + "";
            this.children[i-1].getElementsByTagName("a")[0].innerText = clock_change(this.child_array[i-1], this.child_array[i]);
            child_new_a.innerText = clock_change(this.child_array[i], this.child_array[i + 1]);
            child_new.appendChild(child_new_a);
            this.children[i-1].getElementsByTagName("<a>").onclick = function(){
                var obj = window.open("plan.html",this.innerText,"channelmode=no,toolbar=no, location=yes," + 
                "directories=yes, status=no, menubar=yes, scrollbars=no," + 
                "resizable=no, copyhistory=yes, width=400, height=400");
                var title = this.innerText;
                setTimeout(function(){obj.document.title = title;},1000);
                event.cancelBubble=true;
            }
            this.insertBefore(child_new,this.children[i]);
            
        }
        //重新分配        
        if(i == array_size){
            this.children[i].style.backgroundColor = "#888";
        }
    }
}



function clock_change(left, right){//时间换算器
    var hour_left = parseInt(left * 24);
    var minute_left = parseInt((left * 24 -hour_left) * 60);
    if(minute_left < 10){
        var string_left = hour_left + " : " + "0" + minute_left;
    }else{
        var string_left = hour_left + " : " + minute_left;
    }
    var hour_right = parseInt(right * 24);
    var minute_right = parseInt((right * 24 -hour_right) * 60);
    if(minute_right < 10){
        var string_right = hour_right + " : " + "0" + minute_right;
    }else{
        var string_right = hour_right + " : " + minute_right;
    }
    var return_string = string_left + "--" + string_right;
    return return_string;
}


//
addonlaod(addloadrow);