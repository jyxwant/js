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

function addelement(){
    var abutton=document.getElementById('createnode')
    abutton.onclick=function(){
        var whatyouwrite=document.getElementById('whatyouwant')
        var whatyouwant=whatyouwrite.value
        if(whatyouwant==''){
            whatyouwant='this is the first addtional text'
        }
        var outerelement=document.getElementById('me')
        var newelement=document.createElement('li')
        var textnode=document.createTextNode(whatyouwant)
        newelement.appendChild(textnode)
        outerelement.appendChild(newelement)
        return false
    }
}
function deleteelement(){
    var abutton=document.getElementById('deletenode')
    abutton.onclick=function(){
    var outerelement=document.getElementById('me')
    var removelist=outerelement.getElementsByTagName('li')
    outerelement.removeChild(removelist[removelist.length-1])
        return false
    }
    
}
addonlaod(addelement)
addonlaod(deleteelement)