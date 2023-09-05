const inputImagen = document.getElementById('input-imagen');
const imagenPerfil = document.getElementById('imagen-perfil');
const cambiarFotoButton = document.getElementById('cambiar-foto');

// Agregar un evento al botón para abrir el diálogo de selección de archivo
cambiarFotoButton.addEventListener('click', () => {
    inputImagen.click();
});

// Agregar un evento al input de archivo para manejar la selección de imagen
inputImagen.addEventListener('change', (event) => {
    const nuevaImagen = event.target.files[0]; // Obtiene la imagen seleccionada
    if (nuevaImagen) {
        // Carga la nueva imagen como URL local
        const nuevaImagenURL = URL.createObjectURL(nuevaImagen);
        imagenPerfil.src = nuevaImagenURL;
    }
});