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

function displayabbreviations(){
    var abbreviations =document.getElementsByTagName('abbr')
    if (abbreviations.length<1) return false
    var defs =new Array()
    for (var i=0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i]
        var definition = current_abbr.getAttribute('title')
        var key=current_abbr.lastChild.nodeValue
        defs[key]=definition
    }
    var dlist =document.createElement('dl')
    for(avalue in defs){
        var definition_2=defs[avalue]
        var dtitle=document.createElement('dt')
        var dtitle_text = document.createTextNode(avalue)
        dtitle.appendChild(dtitle_text)
        var ddesc =document.createElement('dd')
        var ddesc_text=document.createTextNode(definition_2)
        ddesc.appendChild(ddesc_text)
        dlist.appendChild(dtitle)
        dlist.appendChild(ddesc)
    }
    var header = document.createElement('h2')
    var header_text = document.createTextNode('Abbreviations')
    header.appendChild(header_text)
    document.body.appendChild(header)
    document.body.appendChild(dlist)
}

function displaycite(){
    var blockquot =document.getElementsByTagName('blockquote')
    if (blockquot.length<1) return false
    for (var i=0;i<blockquot.length;i++){
        var current_block = blockquot[i]
        if(!current_block.getAttribute('cite')){
            continue
        }
        var url = current_block.getAttribute('cite')
        var key=document.createElement('a')
        var source=document.createTextNode('source')
        key.appendChild(source)
        key.setAttribute('href',url)
        blockquot[i].appendChild(key)
    }
  
}
addonlaod(displaycite)
addonlaod(displayabbreviations)