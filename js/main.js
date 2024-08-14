const container = document.getElementById("container");
function crearCard(listaDeProductos) {
    const card = document.createElement("div");
    card.className = "card";
    
    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = listaDeProductos.nombreDelProducto;
    
    const precio = document.createElement("p");
    precio.innerText = listaDeProductos.precio;
    
    const img = document.createElement("img");
    img.src = listaDeProductos.src;
    img.className = "img"

    const boton = document.createElement("button");
    boton.innerText = "Agregar al carrito";
    boton.onclick = () => agregarAlCarrito(producto);
    
    card.append(nombreProducto);
    card.append(precio);
    card.append(img);
    card.append(boton);
    
    container.append(card);
};
    
listaDeProductos.forEach(el => { crearCard(el)
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(listaDeProductos){
if(carrito.some(el => el.id === listaDeProductos.id)){
    const indexProducto = carrito.findIndex(el => el.id === listaDeProductos.id);
    carrito[indexProducto].cantidad += 1;
    carrito[indexProducto].subtotal = carrito[indexProducto].cantidad * carrito[indexProducto].precio;
} else {
    const nuevoProducto = {
        nombre: listaDeProductos.nombre,
        precio: listaDeProductos.precio,
        cantidad: 1,
        subtotal:carrito[indexProducto].subtotal,

    };
    carrito.push(nuevoProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito))
}};



const mostrar = document.createElement("button");
mostrar.innerText = "Mostrar carrito";

mostrar.addEventListener("click", () => {
    carrito.forEach(el=> crearCard(el));
});
const limpiar = document.createElement("button");
limpiar.innerText = "Limpiar carrito";

limpiar.addEventListener("click", () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
});

container.append(mostrar);
container.append(limpiar);