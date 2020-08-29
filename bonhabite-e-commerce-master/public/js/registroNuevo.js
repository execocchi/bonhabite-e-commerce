//alert('LINKEADOO')

window.addEventListener('load', function(){
    let formulario = document.querySelector('.form-login');
    formulario.addEventListener("submit", function(event){

        let errores = [];

        let campoName = document.querySelector('.classjsname');
        let campolastName = document.querySelector('.classjslastName');
        let campoEmail = document.querySelector('.classjsemail');
        let campoPassword = document.querySelector('.classjspass');
        let campoPassword2 = document.querySelector('.classjspass2');
        let campoTerms = document.querySelector('.classjscheck');

        let errorName = document.querySelector('.errorName');
        let errorlastName = document.querySelector('.errorlastName');
        let errorEmail = document.querySelector('.errorEmail');
        let errorPassword = document.querySelector('.errorPassword');
        let errorPassword2 = document.querySelector('.errorPassword2');
        let errorTerms = document.querySelector('.errorTerms');
      
      
        if (campoName.value == ""){
            errores.push('El campo nombre esta vacío');
            errorName.innerHTML = "El campo nombre no puede estar vacío";
            campoName.classList.add('is-invalid')
        } else {
            campoName.classList.add('is-valid')
            campoName.classList.remove('is-invalid')
            errorName.innerHTML = "";
        } 

        if (campolastName.value == ""){
            errores.push('El campo nombre esta vacío');
            errorlastName.innerHTML = "El campo apellido no puede estar vacío";
            campolastName.classList.add('is-invalid')
        } else {
            campolastName.classList.add('is-valid')
            campolastName.classList.remove('is-invalid')
            errorlastName.innerHTML = "";

        } 

        if (campoEmail.value == ""){
            errores.push('El campo email esta vacío');
            errorEmail.innerHTML = "El campo email no puede estar vacío";
            campoEmail.classList.add('is-invalid')
        } else {
            campoEmail.classList.add('is-valid')
            campoEmail.classList.remove('is-invalid')
            errorEmail.innerHTML = "";

        } 
        

        let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!reEmail.test(campoEmail.value)) {``
                errores.push('El email es inválido')
                errorEmail.innerHTML = "Debe ser un email válido";
                campoEmail.classList.add('is-invalid')
            } else {
                campoEmail.classList.add('is-valid')
                campoEmail.classList.remove('is-invalid')
                errorEmail.innerHTML = "";
            } 
 
            if (campoPassword.value == ""){
                errores.push('El campo contraseña no puede estar vacío')
                errorPassword.innerHTML ="El campo contraseña no puede estar vacío";
                campoPassword.classList.add('is-invalid')
            } else if (campoPassword.value.length <6) {
                errores.push('Las contraseñas deben ser iguales')
                errorPassword.innerHTML = "La contraseña debe tener 6 caracteres";
                campoPassword.classList.add('is-invalid')
            } else {
                campoPassword.classList.add('is-valid')
                campoPassword.classList.remove('is-invalid')
                errorPassword.innerHTML = "";
            } 
            
            


      
       if (campoPassword2.value == ""){
            errores.push('El campo contraseña esta vacío')
            errorPassword2.innerHTML ="";
            campoPassword2.classList.add('is-invalid')
        } else if (campoPassword.value !== campoPassword2.value) {
            errores.push('Las contraseñas deben ser iguales')
            errorPassword2.innerHTML = "Las contraseñas deben ser iguales";
            campoPassword2.classList.add('is-invalid')
        } else {
            campoPassword2.classList.add('is-valid')
            campoPassword2.classList.remove('is-invalid')
            errorPassword2.innerHTML = "";
        } 


        /*
        if (campoPassword2.value == "" || campoPassword.value !== campoPassword2.value){
            errores.push('Las contraseñas deben ser iguales')
            errorPassword2.innerHTML = "Las contraseñas deben ser iguales";
            campoPassword2.classList.add('is-invalid')
        } else {
            campoPassword2.classList.add('is-valid')
            campoPassword2.classList.remove('is-invalid')
            errorPassword2.innerHTML = "";
        }  */

        if (!campoTerms.checked){
            errores.push('-')
            errorTerms.innerHTML = "Debes aceptar los términos y condiciones";
            campoTerms.classList.add('is-invalid')
        } else {
            campoTerms.classList.add('is-valid')
            campoTerms.classList.remove('is-invalid')
            errorTerms.innerHTML = "";
        } 
       
        if(errores.length > 0){
            event.preventDefault();
        } 
    
        });

})