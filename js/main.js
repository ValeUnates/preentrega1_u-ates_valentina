let opciones;
let nombre= prompt("Ingresa tu nombre");
function saludar(){
    alert("¡Bienvenid@ " + nombre + " a BLURA INDUMENTARIA!");
}
saludar();

const buzos = [
    {
        color:gris,
        precio: $18,
        srock: true,
    },
    {
    color: azul,
    precio: $18,
    stock: true,
    },
    {
    color: negro,
    precio: $20,
    stock: false,
    },
    {
    color: blanco,
    precio: $19,
    stock: true,
    },
    {
    color: rojo,
    precio: $15,
    stock: false,
    },
]
const remeras = [
    {
    color: gris,
    precio: $10,
    stock: false,
    },
    {
    color: azul,
    precio: $5,
    stock: true,
    },
    {
    color: negro,
    precio: $8,
    stock: false,
    },
    {
    color: blanco,
    precio: $10,
    stock: true,
    },
    {
    color: rojo,
    precio: $9,
    stock: true,
    },
]
class prod{
    constructor(color, precio, stock){
        this.color = color;
        this.precio= precio;
        this.stock= stock;
    }
}

do{
    opciones = parseInt(prompt(`Menú de opciones:
        1.Ver Buzos.
        2.Ver Remeras.
        3.Para consultar stock.
        Para salir, ingrese 0`));
    switch (opciones) {
        case 0:
            alert("Gracias por tu visita, esperamos tu regreso!");
            break;
        case 1:
            let opcionUno = "Buzos:";
            alert(`${opcionUno} ${buzos} (Aceptar para volver al menú)` );
            break;
        case 2:
            let opcionDos= "Remeras:"
            alert(`${opcionDos} ${remeras} (Aceptar para volver al menú)`);
            break;
        case 3:
            function filtrarSock(stock) {
                if (stock) {
                    const stock = productos.filter(el => el.stock);
                    console.log(`Pediste stock de buzos ${buzos.stock}`);
                    alert("Mirá en la consola el stock disponible");
                } else {
                    const sinStock = productos.filter(el => !el.stock);
                    console.log(`Pediste los proximos ingresos: ${!stock}`);
                    alert("Mirá en la consola los productos que vamos a sumar al stock");
                }
            }
            case 4:
            function filtrarSock(stock) {
                if (stock) {
                    const stock = productos.filter(el => el.stock);
                    console.log(`Pediste stock de buzos ${remeras.stock}`);
                    alert("Mirá en la consola el stock disponible");
                } else {
                    const sinStock = productos.filter(el => !el.stock);
                    console.log(`Pediste los proximos ingresos: ${!stock}`);
                    alert("Mirá en la consola los productos que vamos a sumar al stock");
                }
            }
            break;
        default:
            alert("Opcion inválida, ingresá una opcion que este dentro del menú de opciones.")
            break;
    }
}while (opciones!==0);
