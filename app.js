const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML = `
            <div class="col mb-5">
            <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.foto}"  alt="..." />
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar"><img src="./images/agregar-carrito.png" alt="" height="40px"></button>
    `
            contenedorProductos.appendChild(div)

            //Agregar al Carrito
            const agregarAlCarrito = (prodId) => {
                const existe = carrito.some(prod => prod.id === prodId)
                if (existe) {
                    const prod = carrito.map(prod => {
                        if (prod.id === prodId) {
                            prod.cantidad++
                        }
                    })
                } else {
                    const item = data.find((prod) => prod.id === prodId)
                    carrito.push(item)
                }
                actualizarCarrito()
            }
            const boton = document.getElementById(`agregar${producto.id}`)
            boton.addEventListener('click', () => {
                boton.addEventListener("click", () => {
                    Swal.fire("", "Se agrego el producto al carrito", "success");
                    agregarAlCarrito(producto.id)
                })
            })
            botonVaciar.addEventListener('click', () => {
                carrito.length = 0
                actualizarCarrito()
            })
        })
    })


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar">🗑️</button>
        `

        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = (carrito.length)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}
