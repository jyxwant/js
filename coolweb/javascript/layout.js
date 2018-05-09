var navigation=document.getElementById('navigation')
var logoimg=document.getElementById('logo')
var content=document.getElementById('content')
var img_width=logoimg.width
var li_count=navigation.getElementsByTagName('a')

for(var i=0;i<li_count.length;i++){
    var li_child=li_count[i]
    li_child.style.width=img_width/li_count.length-2+'px'
}
navigation.style.width=''+img_width+'px'
content.style.width=''+img_width+'px'
var div_1=document.getElementById('flex').getElementsByTagName('div')[0]
var a=logoimg.offsetLeft
div_1.style.width=a
div_1.style.height=window.getComputedStyle(navigation,null)['height']
function highlightPage(){
    if(!document.getElementsByTagName)return false
    if(!document.getElementById) return false
    if(!document.getElementById('navigation')) return false
    var nav = document.getElementById('navigation')
    var links=nav.getElementsByTagName('a')
    for(var i=0;i<links.length;i++){
        var linkurl=links[i].getAttribute('href')
        var currenturl=window.location.href
        if(currenturl.indexOf(linkurl)!=-1){
            links[i].className='here'
        }
    }
}
function change(){
    if(!document.getElementById) return false
    if(!document.getElementsByTagName) return false
    var alink=navigation.getElementsByTagName('a')
    for(var i=0;i<5;i++){
        alink[i].onmousemove=function(){
            i=this.innerText
            logoimg.src='image/'+i+'.png'
        }
    }    
}
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
addonlaod(change)
addonlaod(highlightPage)


