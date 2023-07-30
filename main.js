let wlValue=10

addWater.onclick=function(){
   if(wlValue<=90){
    wlValue +=10;
    waterLevel.style.height=wlValue+'%';
    currentLevel.innerText=wlValue;
   }
}
removeWater.onclick=function(){
   if(wlValue >= 20){
       wlValue -=10;
       waterLevel.style.height=wlValue+'%';
      currentLevel.innerText=wlValue;
   }
}