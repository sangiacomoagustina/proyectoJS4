/* CARRITO DE COMPRAS 
1- Mensaje de Bienvenida
2- Se le pregunta si desea comprar
3- Se muestra el listado de Productos 
(teniendo en cuenta que para el filtro no hay productos cargados con la misma marca en distintas presentaciones)
4- Se le pregunta si desea seguir comprando
5- Se le muestra el total
6- Mensaje de Gracias por su Compra!*/


const opciones = [];
opciones.push(new Productos(`azucar`, `ledesma`, `1 kg`, 700, 20, 6,));
opciones.push(new Productos(`azucar`, `chango`, `1 kg`, 650, 30, 4,));
opciones.push(new Productos(`yerba`, `mañanita`, `500 gs`, 880, 50, 10,));
opciones.push(new Productos(`yerba`, `playadito`, `1 kg`, 1880, 90, 4,));
opciones.push(new Productos(`leche`, `la serenisima`, `1 lt`, 390, 3,));
opciones.push(new Productos(`cafe`, `arlistan`, `100 gs`, 715, 25, 2,));
opciones.push(new Productos(`te`, `la virginia`, `50 us`, 334, 80, 1,));
opciones.push(new Productos(`mate cocido`, `union`, `25 us`, 296, 50, 4,));
opciones.push(new Productos(`galletitas`, `granix`, `650 gs`, 800, 3, 6,));
opciones.push(new Productos(`galletitas`, `oreo`, `354 gs`, 913, 2,));
opciones.push(new Productos(`manteca`, `la serenisima`, `100 gs`, 587, 3,));
opciones.push(new Productos(`dulce de leche`, `la serenisima`, `400 gs`, 549, 2,));

const carrito = [];

function bienvenido() {

    let empezar = prompt(`¿ Desea comprar algún Producto ? si / no `);

    while (empezar != `no` && empezar != `si`) {

        alert(`Debe ingresar si o no`);

        empezar = prompt(`¿ Desea comprar si o no ?:`);

    }

    if (empezar == `si`) {

        alert(`Le mostramos nuestros Productos:`)

        const elegir = opciones.map(

            (opciones) => opciones.nombre + ` ` + opciones.marca + ` ` + opciones.contenido + ` ` + `$` + opciones.precio);

        alert(elegir.join(`\n`));

    } else if (empezar == `no`) {

        alert(`Vuelva a ingresar para Comprar en otro Momento`);

    }

    while (empezar != `no`) {

        let elegida = prompt(`Ingrese el Producto Deseado: `);

        const productosFilter = opciones.filter((item) => {

            return item.nombre == elegida

        });

        if (productosFilter.length > 0) {

            let preferida = prompt(`¿ Cuál marca elige ?`);

            const productoElegido = productosFilter.find((item) => {

                return item.marca == preferida

            });

            if (typeof productoElegido != `undefined`) {

                cantidad = parseInt(prompt(`¿ Cuántas unidades desea llevar ?`));

                carrito.push(new Pedido(productoElegido, cantidad))

            } else {

                alert(`No tenemos esa Marca`);

            }

        } else {

            alert(`no tenemos ese Producto`);

        }

        let agregar = prompt(`¿Desea seguir agregando Productos? si / no`);

        while (agregar != `no` && agregar != `si`) {

            alert(`Debe ingresar si o no`);

            agregar = prompt(`¿ Desea continuar agregando Productos si o no ?:`);

        }

        if (agregar == `no`) {

            verPedido();

            empezar = `no`;

        }

    }

}

function verPedido() {

    alert(`Le mostramos su Pedido:`)

    let total = 0;

    const carro = carrito.map(

        (item) => {

            total += item.cantidad * item.producto.precio

            return item.producto.nombre + ` ` + item.producto.marca + ` ` + ` ` + `$` + item.producto.precio + ` x` + item.cantidad;

        });

    alert(carro.join(`\n`) + `\n Total: $` + total + `\n` + `¡Gracias por su Compra!`);

}


alert(`¡ Bienvenido al Carrito de Compras ! `);

bienvenido();
