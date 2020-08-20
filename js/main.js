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


//scroll suave

window.onload =()=>{
    let links = document.querySelectorAll('.link')
    let inicio = links[0]
    inicio.addEventListener('click',()=>{
        scrollSuave('#header',500,60)
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let inicioDos = links[1]
    inicioDos.addEventListener('click',()=>{
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        scrollSuave('#header',500,60)
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let acercaDe = links[2]
    acercaDe.addEventListener('click',()=>{
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        scrollSuave('#acercaDe',500,60)
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let proyectos = links[3]
    proyectos.addEventListener('click',()=>{
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        scrollSuave('#NuestrosProyectos',500,60)
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let testimonios = links[4]
    testimonios.addEventListener('click',()=>{
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        scrollSuave('#testimonios',500,60)
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let contacto = links[5]
    contacto.addEventListener('click',()=>{
        document.querySelector('.btn-menu i').classList.toggle('fa-times');
        scrollSuave('#footer',500,60)
        menu.style.left='-100%'
        menu.style.transition='0.5s'
        activador=true;
    })
    let acercaDeDos = links[6]
    acercaDeDos.addEventListener('click',()=>{
        scrollSuave('#acercaDe',500,60)
    })
    
}
let scrollSuave =(objetivo,duracion,compensacion)=>{
    let elemObj = document.querySelector(objetivo);
    let elemPos = elemObj.getBoundingClientRect().top - compensacion;
    let PosActual = window.pageYOffset;
    let tiempoInical= null;

    const animacion = tiempoAhora =>{
        if(tiempoInical == null) tiempoInical = tiempoAhora
        let tiempoPasado = tiempoAhora - tiempoInical
        let auxAnimacion = easeInOutQuad(tiempoPasado,PosActual,elemPos,duracion);
        window.scrollTo(0, auxAnimacion)
        if(tiempoPasado<duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)

}

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }


let btnVolverArriba = document.querySelector('.irArriba');
btnVolverArriba.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
// let btnIrAbajo = document.getElementById('abajo')

// btnIrAbajo.addEventListener('click',()=>{
//     document.body.scrollTop=600;
//     document.documentElement.scrollTop=600;
// })

