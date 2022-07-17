const div = document.querySelector('.Contenedor');
const valor = document.querySelector('#valor');
const boton = document.querySelector('#botoncito');
const boton2 = document.querySelector('#botoncito2');
const boton3 = document.querySelector('#botoncito3');


boton.addEventListener('click',(e) =>{
    e.preventDefault();
    mostrarProducto(valor.value);
})

boton2.addEventListener('click',(e)=>{
    e.preventDefault();
    actualizarProducto();
})

boton3.addEventListener('click',(e)=>{
    e.preventDefault();
    eliminarProducto();
})

function mostrarProducto(valor) {
    fetch(`https://fakestoreapi.com/products/${valor}`)
        .then((res)=>res.json())
        .then((data) => {
            crearProducto(data);
        })
    }

function mostrarProductos(valor){
    for (let i=1;i<=valor;i++){
        mostrarProducto(i)
    }
}

//titulo,precio,descripcion,imagen,categoria

function actualizarProducto() {
    fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))   
}

function eliminarProducto() {
    fetch('https://fakestoreapi.com/products/5',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
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
//mostrarProductos(20);