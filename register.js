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

 const btnSubmitRegister = document.getElementById("lf__login-submitBtn");

 btnSubmitRegister.addEventListener("click", function(){
    alert("No es posible registrar su cuenta :(");
 });