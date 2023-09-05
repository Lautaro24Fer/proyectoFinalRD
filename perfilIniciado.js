const inputImagen = document.getElementById('input-imagen');
const imagenPerfil = document.getElementById('imagen-perfil');
const cambiarFotoButton = document.getElementById('cambiar-foto');


cambiarFotoButton.addEventListener('click', () => {
    inputImagen.click();
});


inputImagen.addEventListener('change', (event) => {
    const nuevaImagen = event.target.files[0];
    if (nuevaImagen) {
        const nuevaImagenURL = URL.createObjectURL(nuevaImagen);
        imagenPerfil.src = nuevaImagenURL;
    }
});
//BANDEJA DE MENSAJES

//TRANSICION DE BANDEJA DE MENSAJES
const mensajesBtn = document.getElementById("navbar-btnMessage");
const closeMensajesBtn = document.getElementById("closeMensajesBtn");
const bandejaMensajes = document.getElementsByClassName("bandejaMensajes")[0];

mensajesBtn.addEventListener("click", function(){
  bandejaMensajes.classList.add("showMessages");
  body.style.overflow = "hidden";
  bandejaMensajes.style.overflow = "auto";
});
closeMensajesBtn.addEventListener("click", function(){
  bandejaMensajes.classList.remove("showMessages");
  body.style.overflow = "auto";
  bandejaMensajes.style.overflow = "hidden";
});

//cerrar sesion

const btnCerrarSesion = document.getElementById("lf__btnCerrarSesion");

btnCerrarSesion.addEventListener("click", function(){
    const confirmacion = window.confirm('¿Estás seguro de cerrar sesión?');

        if (confirmacion) {
            
            window.location.href = "index.html"; 
        } 
});


