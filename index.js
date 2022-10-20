fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
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
                      <button id= "${producto.id}" ><img src="./images/agregar-carrito.png" alt="" height="40px"></button>
              </div>
          </div>
      </div>
      </div>
  `;
      content.append(productoRenderizado);
    })



    let carrito = []


    let boton = document.getElementById("producto.id");
    boton.addEventListener("click", () => {
      Swal.fire(
        '',
        'Se agrego el producto al carrito',
        'success'
      );
    });
  });


let botonCarrito = document.getElementById("changuito");
botonCarrito.addEventListener("click", () => {
  Swal.fire(
    'Excelente!',
    'Por ahora tenes los siguientes productos: ',
  );
});

/* 
const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
}); */