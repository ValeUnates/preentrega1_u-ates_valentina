let nombre = prompt('Ingrese su nombre').toUpperCase()
function saludar(){
    alert(`Bienvenid@ ${nombre} a BLURA INDUMENTARIA`)
}
saludar();

const listaDeProductos = [
    {
        nombreDelProducto: "BUZO LATINA",
        stock: true,
        precio: '$150',
        color: 'GRIS'
    },
    {
        nombreDelProducto: "REMERA MARÍA",
        stock: true,
        precio: '$100',
        color: 'BLANCO'
    },
    {
        nombreDelProducto: "PANTALÓN MALIBÚ",
        stock: true,
        precio: '$350',
        color: 'BURDEOS'

    },
    {
        nombreDelProducto: "SWETER LISBOA",
        stock: true,
        precio: '$400',
        color: 'NEGRO'
    },
    {
        nombreDelProducto: "NIKE AF1",
        stock: true,
        precio: '$300',
        color: 'ROJO'
    },
    {
        nombreDelProducto: "TAPADO LONDRES",
        stock: true,
        precio: '$300',
        color: 'BEIGE'
    },
    {
        nombreDelProducto: "JEAN MOM",
        stock: false,
        precio: '$75',
        color: 'CELESTE'
    },
    {
        nombreDelProducto: "BLAZER TOKYO",
        stock: true,
        precio: '$100',
        color: 'MARRÓN'
    },
    {
        nombreDelProducto: "CALZA LARGA",
        stock: false,
        precio: '$150',
        color: 'MORADO'
    },
    {
        nombreDelProducto: "CALZA 3/4",
        stock: true,
        precio: '$200',
        color: 'BATIK'
    },
    {
        nombreDelProducto: "REMERA NIKE DEPORTIVA",
        stock: false,
        precio: '$40',
        color: 'AMARILLO'
    },
    {
        nombreDelProducto: "CARTERA",
        stock: true,
        precio: '$45',
        color: 'AZUL'
    },
];
class productos {
    constructor (nombreDelProducto, stock, precio, color){
        this.nombreDelProducto = nombreDelProducto;
        this.stock = stock;
        this.precio = precio;
        this.color =color;
    };
};
do{
    opcion = parseInt(prompt(`Menú de opciones:

        INGRESE UNA OPCION
        1. Todos los productos
        2. Stock inmediato
        3. Buscar producto por nombre
        4. Buscar producto por color

        Para salir, ingrese 0`));
    
    switch (opcion) {
        case 0:
            alert ('Gracias por tu visita, esperamos tu regreso!')
            break;
        case 1:
            console.log('Lista de productos' ,listaDeProductos)
            break;

        case 2:
            const stock = listaDeProductos.filter (el => el.stock)
            console.log('El stock de BLURA',stock)
            alert('En la consola podes ver los productos con entrega inmediata')
                break;

        case 3:
            const productoABuscar = prompt('Ingrese el nombre del producto que busca').toUpperCase()
            const nombreDelProducto = listaDeProductos.find(el => el.nombreDelProducto === productoABuscar)
            console.log('El producto que buscabas es', nombreDelProducto)
            alert('En la consola está en resultado de tu busqueda')
                break;
        
        case 4:
            const colorABuscar = prompt('Ingrese el color del producto que busca').toUpperCase()
            const color = listaDeProductos.find(el => el.color === colorABuscar)
            console.log('Productos del color que buscabas', color)
            alert('En la consola está en resultado de tu busqueda')
                break;

        default:
            alert('Opcion no válida, ingrese la correcta.');
            break;
    }
} while (opcion !== 0)