function producto(id, nombre, foto, precio) {
  this.id = id;
  this.nombre = nombre;
  this.foto = foto;
  this.precio = precio;
}

var skincare = [
  new producto(0, "Agua micelar", "images/agua-micelar.png", 2500),
  new producto(1, "Crema hidratante", "images/crema-facial.png", 3000),
  new producto(2, "Protector solar", "images/protector-solar.png", 2500),
];

let carrito = [];

skincare.forEach((producto) => {
  let productoRenderizado = document.createElement("div");
  productoRenderizado.innerHTML = `
<div class="col mb-5">
<div class="card h-100">
<!-- Product image-->
    <img class="card-img-top" src="${producto.foto}"  alt="..." />
<!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
<!-- Product name-->
            <h5 class="fw-bolder">${producto.nombre}</h5>
<!-- Product price-->
                <p> $ ${producto.precio}</p>
                    <button id= ${producto.id}><img  class="imagenCarrito" src="./images/agregar-carrito.png" alt="" ></button
            </div>
        </div>
    </div>
    </div>
`;
  content.append(productoRenderizado);
  let boton = document.getElementById(producto.id);
  boton.addEventListener("click", () =>
    alert("Se agrego el producto al carrito")
  );
});

localStorage.setItem("carrito", JSON.stringify(skincare));