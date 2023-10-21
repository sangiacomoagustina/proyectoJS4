let producto = [];
let carrito = [];



async function obtenerProd () {
    const response = await fetch (`./productos.json`);
    if (response.ok) {
        producto = await response.json ();
        console.log (producto);
    }else {
        throw new Error(`${response.status}`)
    }
} 



obtenerProd ();

cargaProd = async () => {
    await obtenerProd();
    console.log ()
    }
    
    //clase 16 1.50

    // .catch((error) => {
    //     Toastify({
    //         text: `Ocurrió un problema, por favor intente más tarde. ${error}`,
    //         duration: 3000,
    //         close: true,
    //         gravity: "bottom",
    //         position: "right",
    //         stopOnFocus: true, // Prevents dismissing of toast on hover
    //         style: {
    //             background: "linear-gradient(to left, #ff4500, #dd6b55)",
    //         },
    //     }).showToast();
    // });


const boton = document.getElementById(`boton`);

boton.addEventListener(`click`, () => {
    Swal.fire({
        title: 'Atencion!',
        text: 'Desea vaciar el Carrito?',
        icon: 'question',
        confirmButtonText: 'Si',
        showCancelButton: true,
        cancelButtonText: `Cancelar`,
        footer: `<a href= ></a>`
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            console.log(`el usuario apreto confirmar`); //vacia el carrito
            //aca puedo iniciar el carrito vacio y seteo el carrito en local storage
        }/* else {
        console.log (`el usuario cancelo`);
    }*/
    });
});


const botonLogin = document.getElementById(`login`);
const registro = {
    nombreU: ``,
    apellidoU: ``,
    mailUsuario: ``,
    contraseña: ``,
}

botonLogin.addEventListener(`click`, () => {
    Swal.fire({
        background: `#ffe4c4`,
        title: 'LOGIN de USUARIO',
        inputLabel: `Ingrese su nombre:`,
        input: `text`,
        inputPlaceholder: `Juan`,
        confirmButtonText: 'Enviar',
        confirmButtonColor: `#03a837`,
        showCancelButton: true,
        cancelButtonText: `Cancelar`,
        cancelButtonColor: `#dd6b55`,
    }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
            registro.nombreU = result.value;
            Swal.fire({
                background: `#ffe4c4`,
                title: 'LOGIN de USUARIO',
                inputLabel: `Ingrese su apellido:`,
                input: `text`,
                inputPlaceholder: `Pérez`,
                confirmButtonText: 'Enviar',
                confirmButtonColor: `#03a837`,
                showCancelButton: true,
                cancelButtonText: `Cancelar`,
                cancelButtonColor: `#dd6b55`,
            }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                    registro.contraseña = result.value;
                    Swal.fire({
                        background: `#ffe4c4`,
                        title: 'LOGIN de USUARIO',
                        inputLabel: `Ingrese su correo electrónico:`,
                        input: `email`,
                        inputPlaceholder: `micorreo@micorreo.com`,
                        confirmButtonText: 'Enviar',
                        confirmButtonColor: `#03a837`,
                        showCancelButton: true,
                        cancelButtonText: `Cancelar`,
                        cancelButtonColor: `#dd6b55`,
                    }).then((result) => {
                        console.log(result);
                        if (result.isConfirmed) {
                            registro.mailUsuario = result.value;
                            Swal.fire({
                                background: `#ffe4c4`,
                                title: 'LOGIN de USUARIO',
                                inputLabel: `Ingrese su contraseña:`,
                                input: `password`,
                                inputPlaceholder: `abc123`,
                                confirmButtonText: 'Enviar',
                                confirmButtonColor: `#03a837`,
                                showCancelButton: true,
                                cancelButtonText: `Cancelar`,
                                cancelButtonColor: `#dd6b55`,
                            }).then((result) => {
                                console.log(result);
                                if (result.isConfirmed) {
                                    registro.contraseña = result.value;
                                    Swal.fire({
                                        background: `#ffe4c4`,
                                        title: `¡Hola ${registro.nombreU}!`,
                                        icon: `success`,
                                        text: `Ahora puede realizar una compra`,
                                        confirmButtonColor:`#deb887`,
                                    });
                                };
                            });
                        };
                    });
                };
            });
        };
    });
});



/* producto agregado al carrito
Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();*/