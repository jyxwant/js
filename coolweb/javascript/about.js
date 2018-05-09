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




var rm=document.getElementById('rm')
rm.onmousemove=function(){
  if(!document.getElementById)return false
  if(!document.getElementById('rmright'))return false 
  if(!document.getElementById('rm'))return false 
  var rmright=document.getElementById('rmright')
  var rmleft=rm.x
  var rmwidth=rm.width
  var mouse_x=window.event.clientX
  if(mouse_x<=rmleft+rmwidth/2){
    rmright.innerHTML='<p>Rick Sanchez - 一个奇怪和酗酒的 疯狂科学家，他是Beth的父亲，Jerry的岳父，以及Morty和Summer的外公。这个特立独行的人物将他的时间视为至宝：他总是避免常规的人生经历，比如学校、婚姻甚至爱情。他对Morty及其家人向他提出的平凡的要求表示鄙视或无聊，并表明了对Jerry的鄙夷，然而，Rick也会表现出他孤独的一面。</p>'
  }
  if(mouse_x>rmleft+rmwidth/2){
    rmright.innerHTML='<p>Morty Smith - Rick的善良但容易受伤害的14岁的外孙，经常被卷入Rick的疯狂冒险。他天真的但是坚定的道德准则与瑞克的马基雅维利主义自我相抗衡。他通常不愿意遵循Rick的计划，还常受到Rick用来“修复”状况的不正规或不道德的方法所牵连。虽然总在调侃取笑Morty，Rick偶尔会表现出对Morty真正的感情，而Morty有时也会对自己的冒险投入热情。</p>'
  }
}