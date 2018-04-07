var movement
function animation_first(string){
    movement=setTimeout(string,100)
}
function move(id='message',finial_x=100,finial_y=100,time=10){
    if(!document.getElementById) return false
    if(!document.getElementById(id)) return false
    var thisnode=document.getElementById(id)
    thisnode.style.position='absolute'
    var xpos=1+parseInt(thisnode.style.left)  //thisnode.style.left如果不设置初值的话，为什么是''，css属性为auto， 
    var ypos=1+parseInt(thisnode.style.top)  //但是他总要有个值啊，不然怎么知道渲染到哪？
    if(xpos==finial_x&&ypos==finial_y){
        return true
    }
    if(xpos<finial_x){
        xpos++
    }
    if(xpos>finial_x){
        xpos--
    }
    if(ypos<finial_y){
        ypos++
    }
    if(ypos>finial_y){
        ypos--
    }
    thisnode.style.left=xpos+'px'
    thisnode.style.top=ypos+'px'
    var string='move("'+id+'",'+finial_x+','+finial_y+','+time+')'
    animation_first(string)
}
function cancel(){
    if(!document.getElementById)return false
    if(!document.getElementById('cancel')) return false
    if(!document.getElementById('start')) return false
    if(!document.getElementById('origin')) return false
    var cancelbutton=document.getElementById('cancel')
    var startbutton=document.getElementById('start')
    var originbutton=document.getElementById('origin')
    cancelbutton.onclick=function(){
        clearTimeout(movement)
        return false
    }
    startbutton.onclick=function(){
        move()
        return false
    }
    originbutton.onclick=function(){
        if(!document.getElementById('message'))return false
        var message=document.getElementById('message')
        message.style.left='0px'
        message.style.top='0px'
        return false 
    }

}
function addload(func){
    var thisfunc=window.onload
    if(typeof window.onload!='function') {window.onload=func}
    else{ 
        window.onload=function(){
        func()
        thisfunc()
        }
    }
}
addload(move)
addload(cancel)



