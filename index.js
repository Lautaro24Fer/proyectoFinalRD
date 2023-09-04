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
          } else {
            textoModificar.style.opacity = "1";
            cardBtn_img.style.opacity = ".6";
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
});
closeMenuBtn.addEventListener("click", function(){
  bandejaMenu.classList.remove("asides-show-menu");
});
