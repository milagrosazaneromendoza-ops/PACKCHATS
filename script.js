/*=========================================
WHATS PACK
script.js
=========================================*/

//===========================
// SCROLL SUAVE
//===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});

//===========================
// CAMBIO DE COLOR DEL HEADER
//===========================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="#000";
        header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

    }else{

        header.style.background="#111";
        header.style.boxShadow="0 2px 15px rgba(0,0,0,.4)";

    }

});

//===========================
// ANIMACIONES
//===========================

const elementos = document.querySelectorAll(

".card,.servicio,.plan,.testimonio,.video-container"

);

const mostrar = new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.style.opacity="1";

entrada.target.style.transform="translateY(0)";

}

});

},{

threshold:0.2

});

elementos.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all .8s ease";

mostrar.observe(item);

});

//===========================
// FORMULARIO
//===========================

const formulario=document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nombre=document.getElementById("nombre").value.trim();

const telefono=document.getElementById("telefono").value.trim();

if(nombre==="" || telefono===""){

alert("Completa todos los campos.");

return;

}

const mensaje=`Hola 👋

Mi nombre es ${nombre}

Mi número es ${telefono}

Estoy interesado(a) en comprar WhatsPack.

¿Podría brindarme más información?`;

const url=`https://wa.me/51939300137?text=${encodeURIComponent(mensaje)}`;

window.open(url,"_blank");

});

}

//===========================
// EFECTO ESCRITURA
//===========================

const titulo=document.querySelector(".hero-text h1");

if(titulo){

const texto=titulo.innerHTML;

titulo.innerHTML="";

let i=0;

function escribir(){

if(i<texto.length){

titulo.innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,30);

}

}

escribir();

}

//===========================
// BOTÓN WHATSAPP
//===========================

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.style.transform="scale(1.12)";

setTimeout(()=>{

whatsapp.style.transform="scale(1)";

},400);

},1800);

//===========================
// BOTONES COMPRAR
//===========================

document.querySelectorAll(".btn").forEach(boton=>{

boton.addEventListener("mouseenter",()=>{

boton.style.transform="translateY(-5px)";

});

boton.addEventListener("mouseleave",()=>{

boton.style.transform="translateY(0)";

});

});

//===========================
// TARJETAS
//===========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 10px 30px rgba(37,211,102,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

//===========================
// PLANES
//===========================

document.querySelectorAll(".plan").forEach(plan=>{

plan.addEventListener("mouseenter",()=>{

plan.style.transform="translateY(-10px) scale(1.03)";

});

plan.addEventListener("mouseleave",()=>{

plan.style.transform="translateY(0) scale(1)";

});

});

//===========================
// AÑO AUTOMÁTICO
//===========================

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log("✅ WhatsPack cargado correctamente.");
