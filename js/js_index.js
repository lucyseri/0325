'use strict';

//autogallery
const gallery=document.querySelector('.gallery');
const galleryUl=gallery.querySelector('.gallery>ul');
const galleryUlLi=galleryUl.querySelectorAll('li');
const arrBg=[];

for(let i=0;i<galleryUlLi.length;i++){
  arrBg.push(`url(img/c${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background=arrBg[i];
}

let i=-1;

const autoGallery=()=>{
  i++;

  const gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
  const goto=(-i*gap)+'px';
  
  gallery.style.left=goto;
  gallery.style.transition='all 0.5s';
  
  if(i>=galleryUlLi.length-1) i=-1;
}

let setIn=setInterval(autoGallery,5000);

(()=>autoGallery())();

const arrow=document.querySelectorAll('span.arrow');
arrow.forEach(function(el){
  el.addEventListener('mouseover',function(){
    clearInterval(setIn);
  })
  el.addEventListener('mouseout',function(){
    setIn=setInterval(autoGallery,5000);
  })
})