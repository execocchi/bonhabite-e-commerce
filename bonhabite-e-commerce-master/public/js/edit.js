alert('ANDAAAA')

window.addEventListener('load', function(){

    console.log('ANJSFHADSFKJAS')

    let formulario = document.querySelector('.signup-form');
    formulario.addEventListener("submit", function(event){

        let errores = [];

        let campoName = document.querySelector('.classjsName');
        let campoPrice = document.querySelector('.classjsPrice');
        let campoStock = document.querySelector('.classjsStock');
        let campoDescription = document.querySelector('.classjsDescription');
        let campoMeasurements = document.querySelector('.classjsMeasurements');
        let campoWeigth = document.querySelector('.classjsWeigth');
        let campoCategory = document.querySelector('.classjsCategory');
        let campoCollection = document.querySelector('.classjsCollection');
        let campoDiscount = document.querySelector('.classjsDiscount');
        let campoImage = document.querySelector('.classjsImage');

        let errorName = document.querySelector('.errorName');
        let errorPrice = document.querySelector('.errorPrice');
        let errorStock = document.querySelector('.errorStock');
        let errorDescription = document.querySelector('.errorDescription');
        let errorMeasurements = document.querySelector('.errorMeasurements');
        let errorWeigth = document.querySelector('.errorWeigth');
        let errorCategory = document.querySelector('.errorCategory');
        let errorCollection = document.querySelector('.errorCollection');
        let errorDiscount = document.querySelector('.errorDiscount');
        let errorImage = document.querySelector('.errorImage');
      
      
        if (campoName.value == ""){
            errores.push('El campo nombre esta vacío');
            errorName.innerHTML = "El campo nombre no puede estar vacío";
            campoName.classList.add('is-invalid')
        } else {
            campoName.classList.add('is-valid')
            campoName.classList.remove('is-invalid')
            errorName.innerHTML = "";
        } 

        if (campoPrice.value == ""){
            errores.push('El campo nombre esta vacío');
            errorPrice.innerHTML = "El campo precio no puede estar vacío";
            campoPrice.classList.add('is-invalid')
        } else {
            campoPrice.classList.add('is-valid')
            campoPrice.classList.remove('is-invalid')
            errorPrice.innerHTML = "";
        } 

        if (campoStock.value == ""){
            errores.push('El campo stock esta vacío');
            errorStock.innerHTML = "El campo stock no puede estar vacío";
            campoStock.classList.add('is-invalid')
        } else {
            campoStock.classList.add('is-valid')
            campoStock.classList.remove('is-invalid')
            errorStock.innerHTML = "";
            
        } 

        if (campoDescription.value == ""){
            errores.push('El campo detalle esta vacío');
            errorDescription.innerHTML = "El campo detalle no puede estar vacío";
            campoDescription.classList.add('is-invalid')
        } else {
            campoDescription.classList.add('is-valid')
            campoDescription.classList.remove('is-invalid')
            errorDescription.innerHTML = "";

        } 


        if (campoWeigth.value == ""){
            errores.push('El campo peso esta vacío');
            errorWeigth.innerHTML = "El campo peso no puede estar vacío";
            campoWeigth.classList.add('is-invalid')
        } else {
            campoWeigth.classList.add('is-valid')
            campoWeigth.classList.remove('is-invalid')
            errorWeigth.innerHTML = "";

        } 


        if (campoMeasurements.value == ""){
            errores.push('El campo medidas esta vacío');
            errorMeasurements.innerHTML = "El campo medidas no puede estar vacío";
            campoMeasurements.classList.add('is-invalid')
        } else {
            campoMeasurements.classList.add('is-valid')
            campoMeasurements.classList.remove('is-invalid')
            errorMeasurements.innerHTML = "";

        } 


        if (campoCollection.value == "Elija su colección"){
            errores.push('El campo colección esta vacío');
            errorCollection.innerHTML = "Debe seleccionar una colección";
            campoCollection.classList.add('is-invalid')
        } else {
            campoCollection.classList.add('is-valid')
            campoCollection.classList.remove('is-invalid')
            errorCollection.innerHTML = "";
        } 


        if (campoCategory.value == "Qué categoria es?"){
            errores.push('El campo categoría esta vacío');
            errorCategory.innerHTML = "Debe seleccionar una categoría";
            campoCategory.classList.add('is-invalid')
        } else {
            campoCategory.classList.add('is-valid')
            campoCategory.classList.remove('is-invalid')
            errorCategory.innerHTML = "";
        } 

        if (campoDiscount.value == "Elija su descuento"){
            errores.push('El campo descuento esta vacío');
            errorDiscount.innerHTML = "Debe seleccionar un descuento";
            campoDiscount.classList.add('is-invalid')
        } else {
            campoDiscount.classList.add('is-valid')
            campoDiscount.classList.remove('is-invalid')
            errorDiscount.innerHTML = "";
        } 

        if (campoImage.value == ""){
            errores.push('El campo descuento esta vacío');
            errorImage.innerHTML = "Debe seleccionar una imagen";
            campoImage.classList.add('is-invalid')
        } else {
            campoImage.classList.add('is-valid')
            campoImage.classList.remove('is-invalid')
            errorImage.innerHTML = "";
        } 
       
        if(errores.length > 0){
            event.preventDefault();
        } 
    
        });

})