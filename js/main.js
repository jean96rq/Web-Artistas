let btnMenu = document.querySelector('.btn-menu')
let menu=document.querySelector('.list-container')
let contenedorMenu=document.querySelector('.menu')
let activador = true;


btnMenu.addEventListener('click', ()=>{
   if(activador){
       menu.style.left='0'
       menu.style.transition='0.5s'
       activador=false;
   }else{
    menu.style.left='-100%'
    menu.style.transition='0.5s'
    activador=true;
   }
});
