'use strict';
//join
const joinForm=document.querySelector('#joinForm');
const joinBtn=document.querySelector('#joinBtn');

joinBtn.addEventListener('click', ()=>{  
  alert('가입 실행')
  joinForm.submit();
});