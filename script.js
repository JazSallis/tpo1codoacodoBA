function validarFormulario() {
    var email = document.getElementById("email").value; 
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;
    console.log('email: ' + email)
    console.log('nombre:' + nombre);
    console.log('mensaje:'+ mensaje);

    return validarEmail(email) && validarNombre(nombre) && recordarMensaje(mensaje);   
    
}

function validarNombre(inputText) {
    var nombreMin = inputText.toLowerCase()
    var nombreError = document.getElementById("nombreInvalido")
    var inputNombre = document.getElementById("nombre")
    var nombreFormat = /^([a-z \\s])*$/
    if (nombreMin.length<=2){
        nombreError.innerHTML = "Por favor ingresá un nombre"
        inputNombre.setAttribute("style", "border:2px solid rgb(255, 182, 64)")
        //alert("Por favor ingresá un nombre");
        return false;
    } else if (!nombreFormat.test(nombreMin)==true){
        nombreError.innerHTML = "Por favor ingresá un nombre sin números ni caracteres especiales"
        inputNombre.setAttribute("style", "border:2px solid rgb(255, 182, 64)")
        return false
    } else {
        nombreError.innerHTML = ""
        inputNombre.setAttribute("style", "border:2px solid rgba(11, 128, 0, 0.521)")
        return true;
    }
  }

function validarEmail(inputText){
    var emailError = document.getElementById("mailInvalido")
    var inputEmail = document.getElementById("email")
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if (inputText== ""){
        inputEmail.setAttribute("style", "border:2px solid rgb(255, 182, 64)")
        emailError.innerHTML = "Necesitamos un email para poder contestarte"
        //alert("Necesitamos un email para poder responderte");
        return false
    }else if (!mailformat.test(inputText)){
        inputEmail.setAttribute("style", "border:2px solid rgb(255, 182, 64)")
        emailError.innerHTML = "Por favor ingresá un email válido"
        //alert("Por favor ingresá un email válido")
        return false;
    }else{
        inputEmail.setAttribute("style", "border:2px solid rgba(11, 128, 0, 0.521)")
        emailError.innerHTML = ""
        return true;
    }
}

function recordarMensaje(textArea){
    var recordatorio = document.getElementById("mensajeVacio")
    var areaDeTexto = document.getElementById("mensaje")
    if(textArea==""){
        areaDeTexto.setAttribute("style", "border:2px solid rgb(255, 182, 64)")
        recordatorio.innerHTML = "¡Recordá escribir el mensaje!"
        return false;
    }else{
        areaDeTexto.setAttribute("style", "border:2px solid rgba(11, 128, 0, 0.521)")
        recordatorio.innerHTML = ""
        return true;
    }
}

//<button type="submit" class="boton">Enviar</button>
//<button type="submit" onclick = "validarFormulario()" value="Enviar" class="boton" id="botonsubmit">




