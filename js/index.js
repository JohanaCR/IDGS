function validar (){
    var user = document.getElementById("user");
    alert(user.value);
    var pass = document.getElementById("password");
    alert(pass.value);
}

function validar(){
    if (bandera){
        console.log("validacion completa");
        //reedireccione a la pagina correspondiente
    }
}

function correctCaptcha(){
    console.log("captcha resuelto correctamente")
    bandera = true;
}
