//animacion de formularios
 const btnRegister = document.getElementById("lf__btnRegister");
 const btnLogin = document.getElementById("lf__btnLogin");
 const registerForm = document.getElementById("conteiner-registerForm");
 const loginForm = document.getElementsByClassName("lf__registerLogin")[0];

 btnRegister.addEventListener("click", function(){
    registerForm.style.display = "flex";
    registerForm.classList.add("asideRight");
    loginForm.style.display = "none";
    loginForm.classList.remove("asideLeft");
 });
 btnLogin.addEventListener("click", function(){
    loginForm.style.display = "flex";
    loginForm.classList.add("asideLeft");
    registerForm.style.display = "none";
    registerForm.classList.remove("asideRight");
 });

 //error al registrar nueva cuenta

 const btnSubmitRegister = document.getElementById("lf__login-submitBtn");

 btnSubmitRegister.addEventListener("click", function(){
    alert("No es posible registrar su cuenta :(");
 });

 //validacion de formulario de entrada
const inputEmail = document.getElementsByClassName("lf__inputEmail")[0];
const inputPassword = document.getElementsByClassName("lf__inputPassword")[0];
const btnSubmitLogin = document.getElementsByClassName("lf__submitButton")[0];

const emailPrueba = "lautaro123@gmail.com";
const passwordPrueba = "12345678";

btnSubmitLogin.addEventListener("click", function(){

   let inputEmailStatus = inputEmail.value;
   let inputPasswordStatus = inputPassword.value;

   if (inputEmailStatus == emailPrueba && inputPasswordStatus == passwordPrueba){
      alert("validado")
      window.location.href = "perfilIniciado.html";
   }
   else{
      alert("El usuario no existe");
   }

});

const perfilPruebaBtn = document.getElementById("lf__alertBtn");
perfilPruebaBtn.addEventListener("click", function(){
   alert("Correo: lautaro123@gmail.com - Contraseña: 12345678");
});
