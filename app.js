
let bienvenido = "Bienvenido"

let nombre = prompt("Ingrese su nombre y apellido para continuar o escriba SALIR para cancelar")

let salir = "SALIR"
let montoActual =300.00

class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }

const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhala", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)    

const juegoN6 = new Juegos("Dead By Daylight", 29.99)
const juegoN7 = new Juegos("Left 4 Dead 2", 4.99)
const juegoN8 = new Juegos("Resident Evil 4", 9.99)
const juegoN9 = new Juegos("Amnesia The Dark Descent", 7.99)
const juegoN10 = new Juegos("Silent Hill P.T", 59.99)

let juegosCategoria1 = [juegoN1, juegoN2, juegoN3, juegoN4, juegoN5, juegoN6, juegoN7, juegoN8, juegoN9, juegoN10]



while(nombre !== salir){
    let bienvenida = bienvenido + " " + nombre
    



let tarjeta = prompt("Ingrese una tarjeta de 8 digitos.")

while (tarjeta <= 9999999 || tarjeta >= 99999999) {

    tarjeta = prompt("Por favor, ingrese una tarjeta valida.")

}


console.log(bienvenida)
alert(`${bienvenida}, su tarjeta fue tomada con exito.`)


let game = prompt(`Escriba el nombre del producto que desea:
Categoria 1(Aventura/Mundo Abierto):
1.${juegosCategoria1[0].nombreJuego} (${juegosCategoria1[0].precioJuego} USD$)
2.${juegosCategoria1[1].nombreJuego} (${juegosCategoria1[1].precioJuego} USD$)
3.${juegosCategoria1[2].nombreJuego} (${juegosCategoria1[2].precioJuego} USD$)
4.${juegosCategoria1[3].nombreJuego} (${juegosCategoria1[3].precioJuego} USD$)
5.${juegosCategoria1[4].nombreJuego} (${juegosCategoria1[4].precioJuego} USD$)

Categoria 2(Terror/Supervivencia):
6.${juegosCategoria1[5].nombreJuego} (${juegosCategoria1[5].precioJuego} USD$)
7.${juegosCategoria1[6].nombreJuego} (${juegosCategoria1[6].precioJuego} USD$)
8.${juegosCategoria1[7].nombreJuego} (${juegosCategoria1[7].precioJuego} USD$)
9.${juegosCategoria1[8].nombreJuego} (${juegosCategoria1[8].precioJuego} USD$)
10.${juegosCategoria1[9].nombreJuego} (${juegosCategoria1[9].precioJuego} USD$)

MONTO DISPONIBLE(300,00 USD$)
Si desea seleccionar varios productos escriba SC`)

let carritoRellenar =[]

let carritoDeCompras = []



while (game <= 0 || game >= 11 ) {

    alert("Por favor asegurese de escribir el nombre de lo que hay en el catalogo.")

    game = prompt(`Por favor escriba el producto que desea comprar:
Categoria 1(Aventura/Mundo Abierto):
1.${juegosCategoria1[0].nombreJuego} (${juegosCategoria1[0].precioJuego} USD$)
2.${juegosCategoria1[1].nombreJuego} (${juegosCategoria1[1].precioJuego} USD$)
3.${juegosCategoria1[2].nombreJuego} (${juegosCategoria1[2].precioJuego} USD$)
4.${juegosCategoria1[3].nombreJuego} (${juegosCategoria1[3].precioJuego} USD$)
5.${juegosCategoria1[4].nombreJuego} (${juegosCategoria1[4].precioJuego} USD$)

Categoria 2(Terror/Supervivencia):
6.${juegosCategoria1[5].nombreJuego} (${juegosCategoria1[5].precioJuego} USD$)
7.${juegosCategoria1[6].nombreJuego} (${juegosCategoria1[6].precioJuego} USD$)
8.${juegosCategoria1[7].nombreJuego} (${juegosCategoria1[7].precioJuego} USD$)
9.${juegosCategoria1[8].nombreJuego} (${juegosCategoria1[8].precioJuego} USD$)
10.${juegosCategoria1[9].nombreJuego} (${juegosCategoria1[9].precioJuego} USD$)

MONTO DISPONIBLE(100,00 USD$)`)

}

if(tarjeta <= 0){


alert("Error, su monto en la tarjeta es menor o igual a 0")

}

let totalAPagar

switch (game) { 
    case "1":
        carritoDeCompras.push(juegosCategoria1[0])
        totalAPagar = carritoDeCompras.reduce
        ((acc, carritoDeCompras) => {return acc + carritoDeCompras.precioJuego;}, 0)
        alert(`Acabas de comprar ${carritoDeCompras[0].nombreJuego} por ${totalAPagar} USD$
        Se redujo el monto de la tarjeta a ${montoActual - carritoDeCompras[0].precioJuego} USD$`)
        break;

    
    default:
        console.log("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        alert("No se selecciono ninguna opcion valida, por favor recargue la pagina e intente nuevamente")
        break;
   
        
}
break
}
if(nombre === salir){
    
}

    








