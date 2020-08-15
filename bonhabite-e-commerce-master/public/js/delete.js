//alert("hola")

// <link rel="stylesheet" href="css/master.css"></link>

window.addEventListener('load', () => {

    let sureDelete = document.querySelectorAll('.sureDelete')

    sureDelete.forEach(function (elemento) {
        elemento.addEventListener('click', function (e) {
            e.preventDefault();
            Swal.fire({
                    title: 'Estás seguro?',
                    text: "No hay vuelta atrás",
                    showCancelButton: true,
                    confirmButtonColor: '#87998B',
                    cancelButtonColor: '#D7613C',
                    confirmButtonText: 'Confirmar',
                    customClass: 'confirmoBorrar',
                })
                .then((result) => {
                    if (result.value) {
                        //ver que es la ruta - delete/id
                        //console.log(e.target.parentElement.href); 
                       
                        Swal.fire('Eliminado', 'Su archivo ya no existe', 'success')
                    }
                }).then(result =>  window.location.href = e.target.parentElement.href) 
        })
    })

})