const div = document.querySelector('.Contenedor');
const valor = document.querySelector('#valor')

function mostrarProducto(i) {
    fetch(`https://fakestoreapi.com/products/${i}`)
        .then((res)=>res.json())
        .then((data) => {
            crearProducto(data);
        })
    }

function mostrarProductos(valor) {
    for (let i=1;i<=valor;i++){
        mostrarProducto(i)
    }
}

function crearProducto(producto) {
    const div_2= document.createElement('div')
    div_2.innerHTML=(`<div class="card" style="width:30%">
<img class="card-img-top " src="${producto.image}" alt="Card image" style="width:100%">
<div class="card-body">
  <h4 class="card-title">${producto.title}</h4>
  <p class="card-text">${producto.description}</p>
  <p class="card-text">${producto.price}</p>
  <a href="#" class="btn btn-primary">See Profile</a>
</div>
</div>`)
    div.appendChild(div_2)
    }
mostrarProductos(20);