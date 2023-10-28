const botonLogin = document.getElementById(`login`);
const registro = {
    nombreU: ``,
    mailUsuario: ``,
}

botonLogin.addEventListener(`click`, () => {
    Swal.fire({
        background: `#ffe4c4`,
        title: 'LOGIN de USUARIO',
        inputLabel: `Ingrese su nombre:`,
        input: `text`,
        inputPlaceholder: `Juan`,
        inputAttributes: {
            required: 'on',
        },
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
                        title: `¡Hola ${registro.nombreU}!`,
                        icon: `success`,
                        text: `Ahora puede realizar la compra y le enviaremos el detalle a su Correo: ${registro.mailUsuario}`,
                        confirmButtonColor: `#deb887`,
                    });
                };
            });
        };
    });
}
);



