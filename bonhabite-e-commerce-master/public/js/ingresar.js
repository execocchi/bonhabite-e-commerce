//alert('LINKEADOO')

window.addEventListener('load', function(){
    let formulario = document.querySelector('.form-login');
    formulario.addEventListener("submit", function(event){

        let errores = [];

        let campoEmail = document.querySelector('.classjsemail');
        let campoPassword = document.querySelector('.classjspass');
        let errorEmail = document.querySelector('.errorEmail');
        let errorPassword = document.querySelector('.errorPassword');
      
        if (campoEmail.value == ""){
            errores.push('El campo email esta vacío');
            errorEmail.innerHTML = "El campo email no puede estar vacío";
           
            
        }
        if (campoPassword.value == ""){
            errores.push('El campo contraseña esta vacío')
            errorPassword.innerHTML = "El campo contraseña no puede estar vacío";
        }
       
        if(errores.length > 0){
            event.preventDefault();
        } 
    
        });

})