const ancho = window.innerWidth;
const body = document.body;

//FUNCIONALIDAD DE LAS CARD
const botonesCambiarOpacidad = document.querySelectorAll(".card-btn");
      botonesCambiarOpacidad.forEach(function (boton) {
      boton.addEventListener("click", function () {
        const tarjeta = boton.closest(".card");
        const textosModificar = tarjeta.querySelectorAll(".lf__card-text");
        const cardBtn_img = tarjeta.querySelector(".card-img")
  
        textosModificar.forEach(function (textoModificar) {
          if (textoModificar.style.opacity === "1") {
            textoModificar.style.opacity = "0";
            cardBtn_img.style.opacity = "1";
            tarjeta.style.overflow = "hidden";
          } else {
            textoModificar.style.opacity = "1";
            cardBtn_img.style.opacity = ".6";
            tarjeta.style.overflow = "auto";
          }
        });
      });
    });

//TRANSICION DEL SEARCHBAR
const searchBtn = document.getElementById("navbar-btnSearch");
const closeSearchBtn = document.getElementById("closeAsideBtn");
const bandejaSearch = document.getElementsByClassName("lf__section-asides-search")[0];
searchBtn.addEventListener("click", function(){
  bandejaSearch.classList.add("asides-show");
});
closeSearchBtn.addEventListener("click", function(){
  bandejaSearch.classList.remove("asides-show");
});

//TRANSICION DEL MENU
const menuBtn = document.getElementById("navbar-btnMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const bandejaMenu = document.getElementsByClassName("lf__section-asides-menu")[0];

menuBtn.addEventListener("click", function(){
  bandejaMenu.classList.add("asides-show-menu");
  body.style.overflow = "hidden";
  bandejaMenu.style.overflow = "auto";
});
closeMenuBtn.addEventListener("click", function(){
  bandejaMenu.classList.remove("asides-show-menu");
  body.style.overflow = "auto";
  bandejaMenu.style.overflow = "hidden";
});




//AGREGAR A CARRITO
const btnsAgregarCarrito = document.querySelectorAll(".btn.btn-primary");

btnsAgregarCarrito.forEach((boton) =>{
  boton.addEventListener("click", function(){
    alert("Agregado al carrito con exito!");
  });
});

//mensajes de funciones premium
const btnFuncionesPremium = document.getElementById("functionPremium");
const btnFuncionesPremium1 = document.getElementById("functionPremium1");
btnFuncionesPremium.addEventListener("click", function(){
  alert("Inicie sesion para ver la seccion de las compras")
});
btnFuncionesPremium1.addEventListener("click", function(){
  alert("Inicie sesion para ver la seccion de los direct");
});

