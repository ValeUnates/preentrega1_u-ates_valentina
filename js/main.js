let opciones;
let nombre= prompt("Ingresa tu nombre");
function saludar(){
    alert("¡Bienvenid@ " + nombre + " a BLURA INDUMENTARIA!");
}
saludar();
do{
    opciones = parseInt(prompt("Menú de opciones\n\n 1. Ver Buzos\n\n 2.Ver Remeras \n\n 3.Para calcular el valor de tu compra\n\n Para salir, ingrese 0"));
    switch (opciones) {
        case 0:
            alert("Gracias por tu visita, esperamos tu regreso!");
            break;
        case 1:
            let opcionUno = "Buzos:";
            alert(opcionUno + "\n Gris ($15)\n Azul ($18)\n Negro ($20)\n Blanco ($19)\n Rojo ($15)\n (Aceptar para volver al menú)" );
            break;
        case 2:
            let opcionDos= "Remeras:"
            alert(opcionDos + "\n Gris ($5)\n Azul ($8)\n Negra ($10)\n Blanca ($9)\n Roja ($5)\n (Aceptar para volver al menú)");
            break;
        case 3:
            function suma(){
                alert("Podés sumar hasta 5 productos");
                const productoUno=parseInt(prompt("Ingrese el valor del primer producto"));
                const productoDos=parseInt(prompt("Ingrese el valor del segundo producto"));
                const productoTres=parseInt(prompt("Ingrese el valor del tercer producto"));
                const productoCuatro=parseInt(prompt("Ingrese el valor del cuarto producto"));
                const productoCinco=parseInt(prompt("Ingrese el valor del quinto producto"));
                alert("El resultado es " + "$" + (productoUno + productoDos + productoTres + productoCuatro + productoCinco));
            }
            suma();
            break;
        default:
            alert("Opcion inválida, ingresá una opcion que este dentro del menú de opciones.")
            break;
    }
}while (opciones!==0);
