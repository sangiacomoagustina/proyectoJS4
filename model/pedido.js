const pintarCarrito = () => {

    modalContainer.innerHTML = ``;

    modalContainer.style.display = "flex";

    const modalH = document.createElement(`div`);
    modalH.className = "modal-header"
    modalH.innerHTML = `
<h2 class="tittle"> Detalle: </h2>
`;

    modalContainer.append(modalH);


    const modalB = document.createElement(`h2`);
    modalB.className = "modal-header-button"
    modalB.innerText = `❎`;

    modalB.addEventListener(`click`, () => {
        modalContainer.style.display = "none";
    });

    modalH.append(modalB);


    carrito.forEach((product) => {

        let carritoContent = document.createElement(`div`);
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.imagen}"> 
        <h3> ${product.nombre}</h3>
        <h3> ${product.marca}</h3>
        <p>$${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <button class="sumar-prod">➕</button>
        <button class="restar-prod">➖</button>
        <button class="delete-prod">❌</button>
        <p>Total: $${parseInt(product.precio * product.cantidad)}</p>
`;

        modalContainer.append(carritoContent);

        let sumar = carritoContent.querySelector(".sumar-prod");
        sumar.addEventListener(`click`, () => {
            product.cantidad++;

            salvarCarrito();
            pintarCarrito();
        });

        let restar = carritoContent.querySelector(".restar-prod");
        restar.addEventListener(`click`, () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }

            salvarCarrito();
            pintarCarrito();
        });


        let eliminar = carritoContent.querySelector(".delete-prod");
        eliminar.addEventListener(`click`, () => {

            Swal.fire({
                background: `#ffe4c4`,
                title: '¡Atencion!',
                text: '¿Seguro Desea Eliminar Este Producto del Carrito?',
                icon: 'question',
                confirmButtonText: 'Si',
                confirmButtonColor: `#03a837`,
                showCancelButton: true,
                cancelButtonText: `No`,
                cancelButtonColor: `#dd6b55`,
            }).then((result) => {

                if (result.isConfirmed) {

                    eliminarProd(product.id);

                }
            });
        });
    });

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const totalE = document.createElement(`div`);
    totalE.className = "total-content"
    totalE.innerHTML = `
    Total a pagar: $${parseInt(total)}
    <button class="pagar">ir a pagar</button>
    `;

    modalContainer.append(totalE)

    let pago = totalE.querySelector(".pagar");
    pago.addEventListener(`click`, () => {
        if (total >= 1) {
            Toastify({
                text: `Lo redirijimos para realizar el Pago.`,
                duration: 3000,
                destination: "https://developer.paypal.com/home/",
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { }
            }).showToast();
        } else {
            Toastify({
                text: `Debe seleccionar un producto para poder continuar`,
                duration: 3000,
                close: true,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to left, #ff4500, #dd6b55)",
                },
            }).showToast();
        }

    })
}

verCarrito.addEventListener(`click`, pintarCarrito);

const eliminarProd = (id) => {

    const prodId = carrito.find((item) => item.id === id);

    carrito = carrito.filter((carritoElegido) => {
        return carritoElegido !== prodId;
    });

    salvarCarrito();
    pintarCarrito();

};