const opciones = document.getElementById(`opciones`)
const verCarrito = document.getElementById(`verCarrito`)
const modalContainer = document.getElementById(`modalContainer`)

let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];


async function obtenerProd() {
    const response = await fetch(`./productos.json`);
    if (response.ok) {
        producto = await response.json();

        producto.forEach((product) => {
            let content = document.createElement(`div`);
            content.className = `card`
            content.innerHTML = `
            <img src="${product.imagen}"> 
            <h3> ${product.nombre}</h3>
            <h3> ${product.marca}</h3>
            <p class="precio"> $${product.precio}</p>
            `;

            opciones.append(content);

            let elegir = document.createElement(`button`);
            elegir.className = `elegir`;
            elegir.innerText = `elegir`;

            content.append(elegir);

            elegir.addEventListener(`click`, () => {

                const repetido = carrito.some((prodRepetido) => prodRepetido.id === product.id);

                if (repetido === true) {
                    carrito.map((prod) => {
                        if (prod.id === product.id) {
                            prod.cantidad++;
                        }
                    });
                } else {
                    carrito.push({
                        id: product.id,
                        imagen: product.imagen,
                        nombre: product.nombre,
                        marca: product.marca,
                        precio: product.precio,
                        cantidad: product.cantidad,
                    });
                    
                    salvarCarrito();
                };
            });
        });
    } else {
        Toastify({
            text: `Ocurrió un problema, por favor intente más tarde. ${error}`,
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to left, #ff4500, #dd6b55)",
            },
        }).showToast();
    };
}

obtenerProd();

const salvarCarrito = () => {
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
};

let categorias = document.querySelector("#categorias")

fetch('https://api.escuelajs.co/api/v1/categories')
    .then((response) => response.json())
    .then((data) => {
        const llegarApi = data.slice(1, 4)
        llegarApi.forEach((info) => {
            const apiContent = document.createElement(`div`)
            apiContent.className = `card`
            apiContent.innerHTML = `
                        <h3> ${info.name} </h3>
                        <img src= "https://picsum.photos/200/200">
                        <p class= "enlaceApi"> ${info.image} </p>
                        `;
            categorias.append(apiContent)
        })
    })
