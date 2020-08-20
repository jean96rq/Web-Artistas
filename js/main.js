let btnMenu = document.querySelector('.btn-menu')
let menu=document.querySelector('.list-container')
let contenedorMenu=document.querySelector('.menu')
let activador = true;

// Menu despegable
btnMenu.addEventListener('click', ()=>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
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

// Recorrer la clase activo por todos los <a> y limpiarlos
let enlaces = document.querySelectorAll('.list li a');


enlaces.forEach((e)=>{
    e.addEventListener('click',(event)=>{
        enlaces.forEach((link)=>{
            link.classList.remove('activo');
        })
        event.target.classList.add('activo')

    })
})

// Efectos con el scroll

let scrollActual = window.pageYOffset;
window.onscroll = () =>{
    let scrollActivado=window.pageYOffset;
// Esconder y mostrar menu con el scroll
    if(scrollActual>scrollActivado){
        contenedorMenu.style.top="0";
        contenedorMenu.style.transition="0.5s";
    }else{
        contenedorMenu.style.top="-60px";
        contenedorMenu.style.transition="0.5s";
    }
    scrollActual=scrollActivado;
//  Esconder y mostrar boton volver arriba con el scroll
    let btnVolverArriba = document.querySelector('.irArriba');
    let arriba = window.pageYOffset;

    if(arriba<=600){
        contenedorMenu.style.borderBottom ='none'
        btnVolverArriba.style.right= "-100%"
        btnVolverArriba.transition='0.7s'
    }else{
        contenedorMenu.style.borderBottom ='solid #ff2e63 2px'
        btnVolverArriba.style.right= "10px"
        btnVolverArriba.transition='0.7s'
    }
}

// ir Arriba con el boton 'irArriba'
let btnVolverArriba = document.querySelector('.irArriba');
btnVolverArriba.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
let btnIrAbajo = document.getElementById('abajo')

btnIrAbajo.addEventListener('click',()=>{
    document.body.scrollTop=600;
    document.documentElement.scrollTop=600;
})

