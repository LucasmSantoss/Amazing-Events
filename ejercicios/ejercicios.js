// // Intro a JavaScript //

//1

// let miNombre = "Lucas";

//2

// let miApellido = "Santos";

//3

// let miEdad = 27;

//4

// let miMascota = "Chopper";

//5

// let edadMascota = 9;

//6

// console.log(miNombre, miApellido,miEdad,miMascota,edadMascota)

//7

// let nombreCompleto = miNombre + miApellido;

//8

// let textoDePresentacion = "Hola me llamo" + " "
//  + nombreCompleto + " " + "tengo" + " " + miEdad + "y mi mascota se llama" + miMascota + " " + "tiene" + edadMascota;

// 9

// let sumaEdades = miEdad + edadMascota;

// let restaEdades = miEdad - miMascota;

// let productoEdades = miEdad * edadMascota;

// let divisionEdades = miEdad / edadMascota;

//10

//  let nombre = prompt("Ingrese su nombre");
//  let apellido = prompt("Ingrese su apellido");
//  let edad = prompt ("Ingrese su edad");
//  let mascota = prompt("Ingrese el nombre de su mascota");
//  let edadMascota = prompt("Ingrese la edad de su mascota");

//  console.log(nombre,apellido,edad,mascota,edadMascota);
//  console.log(nombre + " " + apellido);

//11

// const alumno = {
//     nombre: "Lucas",
//     apellido: "Santos",
//     edad: 27,
//     ciudad: "Mar del Plata",
//     estudia: "JavaScript"
// }

// console.table(alumno)

// console.log(alumno.nombre)
// console.log(alumno.apellido)
// console.log(alumno.edad)
// console.log(alumno.ciudad)
// console.log(alumno.estudia)

//12

// const mascota = {
//     nombre: "Chopper",
//     edad: 9,
//     tipoDeMascota: "Perro",
//     ciudad: "Puerto Madryn",
//     raza: "Calle"

// }

// console.table(mascota)

// console.log(mascota.nombre)
// console.log(mascota.edad)
// console.log(mascota.tipoDeMascota)
// console.log(mascota.ciudad)
// console.log(mascota.raza)

//13

// let frutas = ["Manzana", "Pera", "Naranja", "Frutilla", "Durazno"];

// console.log(frutas)

// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])
// console.log(frutas[4])

// 14

// let numeros = [1,2,3,4,5];

// console.log(numeros)

// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

// 15

// let familia = ["Pepe", "Carlos","Daniel","Juan","Eduardo"];

// console.log(familia)

// console.log(familia[0])
// console.log(familia[1])
// console.log(familia[2])
// console.log(familia[3])
// console.log(familia[4])

// 16

// let textoAleatorio = `${frutas[1]} ${numeros[3]} ${familia[4]}`;

// console.log(textoAleatorio);

//17

// let  edad = prompt("Ingrese su edad");
// let  edadCompañero =  prompt("Ingrese su edad Compañero");

//  let edadesIguales = edad === edadCompañero;23

//  let soyMayor = edad > edadCompañero;

//  let soyMenor = edad < edadCompañero;

// console.log("Mi edad es igual a la de mi compañero " + edadesIguales );

// console.log("Mi edad es mayor que la de mi compañero " + soyMayor);

// console.log("Mi edad es menor que la de mi compañero " + soyMenor);

// 18

// let soyMayorDeEdad = prompt("Ingrese su edad");

// if (soyMayorDeEdad > 18){
//     console.log("Soy mayor de edad " + soyMayorDeEdad)
// }

//19

//  let edad = prompt("Ingrese su edad");
//  let altura = prompt("Ingrese su altura");

//  let puedeSubir = edad > 6 && altura >= 120;

//  console.log("Puede subir a la atraccion " + puedeSubir);

//20

// let pase = prompt("Posee un pase VIP, NORMAL o LIMITADO?");
// let saldo = prompt("Ingrese su saldo");

// let puedePasar = pase.toLocaleLowerCase() === "vip" || saldo >= 1000;

// alert("La persona puede pasar " + puedePasar)

// Condisionales

//1

// let num1 = prompt("Ingrese primer numero");
// let num2 = prompt("Ingrese segundo numero");

// if (num1 > num2 ){
//     console.log(num1);
// } 

//2

// let num1 = prompt("Ingrese primer numero");
// let num2 = prompt("Ingrese segundo numero");

// if (num1 === num2){
//     console.log("Son iguales")
// } else {
//     console.log("Son diferentes");
// }

//3

// let num1 = prompt("Ingrese primer numero");
// let num2 = prompt("Ingrese segundo numero");

// if (num1 > num2 ){
//     console.log(num1 + " Es mayor");
// } else if (num1 === num2){
//     console.log("Son iguales")
// }

// 4

// let num1 = prompt("Ingrese primer numero");
// let num2 = prompt("Ingrese segundo numero");
// let num3 = prompt("Ingrese el tercer numero");

// let numMasChico = prompt(Math.min(num1,num2,num3));

// //5

//  const persona1 = {
//      nombre: "Lucas",
//      apellido: "Santos",
//      altura: "1.81",
//      edad: 27,
//      ciudad: "Mar del Plata"
//  }

//  const persona2 = {
//      nombre: "Eduardo",
//      apellido: "Dominguez",
//      altura: "1.45",
//      edad: 32,
//      ciudad: "Mar de las Toscas"
//  }


// if (persona1.altura > persona2.altura) {
//   alert(`La persona mas alta es ${persona1.nombre}`);
// } else if (persona1.altura < persona2.altura) {
//     alert(`La persona mas alta es ${persona2.nombre}`);
// } 

// if (persona1.edad > persona2.edad) {
//     alert(`La persona con mayor edad es  ${persona1.nombre}`);
// } else if (persona1.edad < persona2.edad) {
//     alert(`La persona con mayor edad es  ${persona2.nombre}`);
// }

//6

// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su edad");
// let altura = prompt("Ingrese su altura");
// let vision = prompt("Ingrese su rango de vision");

// if (edad >= 18 && altura >= 180 && vision > 8){
//         alert("Puede conducir")
// } else {
//         alert("No puede manejar")
// }

//7

// let miNombre = "lucas";
// let nombre = prompt("Ingrese su nombre");
// let pase = prompt("Posee un pase VIP o Normal?");
// let entrada = prompt("Posee entrada? Si o No");
// let usarEntrada;
// let dinero;


// if (nombre === miNombre || pase.toLowerCase() === "vip") {
//   alert("Bievenido, puede pasar");
// } else if (entrada.toLowerCase() === "si") {
//   usarEntrada = prompt("Desea utilizarla? Si o No");
//   if (usarEntrada.toLowerCase() === "si") {
//     alert("Bienvenido, puede pasar");
//   } else {
//     alert("Que tenga un buen dia.");
//   }
// } else if (entrada.toLowerCase() === "no") {
//   entrada = prompt("Desea comprar? Si o No");
//   if (entrada.toLowerCase() === "si") {
//     dinero = prompt("Cuanto dinero tienes?");
//     if (dinero >= 1000) {
//       alert("Gracias por comprar la entrada, Bienvenido");
//     } else {
//       alert("Lo siento, no le alcanza.");
//     }
//   } else {
//     alert("Que tenga un buen dia");
//   }
// }

//8

// let numero = 5;

// let i = 0;

// do {
//   let numeroIncognita = prompt(`Ingrese el valor`);
//   if (numeroIncognita >= 1 && numeroIncognita <= 10) {
//     if (numeroIncognita < numero) {
//       alert("El valor es menor, Vuelve a Intentarlo!!");
//     } else if (numeroIncognita > numero) {
//       alert("El numero es mayor, Vuelve a Intentarlo!!");
//     } else if (numero == numeroIncognita) {
//       alert("Ganaste crack!");
//       break;
//     }
//   }
//   i++;
// } while (i < 3);


//9

// let edad = prompt("Cual es tu edad");

// if(edad >= 0 && edad <=12){
//   alert("Es un infante");
// } else if (edad >= 13 && edad <= 18){
//   alert("Es un adolacente");
// } else if (edad >= 19 && edad <= 45){
//   alert("Es un mayor joven")
// } else if (edad >= 45 && edad < 100){
//   alert("Es un anciano")
// } else if (edad >= 100){
//   alert("En realidad tenes esa edad?")
// } else {
//   alert("Ingresa una edad correcta")
// }

//10

// const jugador1 = prompt("Jugador1 Ingresa piedra, papel o tijera");
// const jugador2 = prompt("Jugador2 Ingresa piedra, papel O tijera");

// if (jugador1 === "piedra" && jugador2 === "tijera") {
//   alert("Ganador " + jugador1);
// } else if (jugador1 === "papel" && jugador2 === "piedra") {
//   alert("Ganador " + jugador1);
// } else if (jugador1 === "tijera" && jugador2 === "papel") {
//   alert("Ganador " + jugador1);
// } else if (jugador2 === "piedra" && jugador1 === "tijera") {
//   alert("Ganador " + jugador2);
// } else if (jugador2 === "papel" && jugador1 === "piedra") {
//   alert("Ganador " + jugador2);
// } else if (jugador2 === "tijera" && jugador1 === "papel") {
//   alert("Ganador " + jugador2);
// } else if (
//   (jugador1 !== "papel" &&
//     jugador1 !== "tijera" &&
//     jugador1 !== "piedra" &&
//     jugador2 !== "piedra" &&
//     jugador2 !== "papel") ||
//   jugador2 !== "tijera"
// ) {
//   alert("Hiciste trampa");
// } else {
//   alert("Empate");
// }

//11

// let color = prompt("Ingrese el color");

// switch (color) {
//     case "blanco":
//     alert("Falta de color");
//     break;

//     case "negro":
//     alert("Falta de color");
//     break;
    
//     case "verde":
//     alert("El color de la naturaleza");
//     break;

//     case "azul":
//     alert("El color del agua");
//     break;

//     case "amarillo":
//     alert("El color del sol");
//     break;

//     case "rojo":
//     alert("El color del fuego");
//     break;

//     case "marron":
//     alert("El color de la tierra");
//     break;

//     default:
//     alert("Excelente eleccion, no lo teniamos pensado");

// }

//12

// let operacion = prompt("Que operacion desea realizar? Suma, Resta, Multiplicacion o Division");

// let valor1;
// let valor2;

// if(operacion.toLowerCase() === "suma" || operacion.toLowerCase() === "resta"
//  || operacion.toLowerCase() === "multiplicacion"
//  || operacion.toLowerCase() === "division"){
// if(operacion.toLowerCase() === "suma"){
//     valor1 = parseInt(prompt("Ingrese el primer numero"));
//     valor2 = parseInt(prompt("Ingrese el segundo numero"));
//     let suma = valor1 + valor2;
//     alert(suma);
// }else if (operacion.toLowerCase() === "resta"){
//     valor1 = parseInt(prompt("Ingrese el primer numero"));
//     valor2 = parseInt(prompt("Ingrese el segundo numero"));
//     let resta = valor1 - valor2;
//     alert(resta);
// } else if (operacion.toLowerCase() === "multiplicacion"){
//     valor1 = parseInt(prompt("Ingrese el primer numero"));
//     valor2 = parseInt(prompt("Ingrese el segundo numero"));
//     let multiplicacion = valor1 * valor2;
//     alert(multiplicacion);
// }else if(operacion.toLowerCase() === "division"){
//     valor1 = parseInt(prompt("Ingrese el primer numero"));
//     valor2 = parseInt(prompt("Ingrese el segundo numero"));
//     if (valor2 === 0){
//         alert("El divisor no puede ser 0");
//     } else {
//         let division = valor1 / valor2;
//         alert(division); 
//     }
// }
   
// }else {
//     alert("Ingrese la palabra Suma, Resta, Multiplicacion o Division")
// }


// //13

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let sexo = prompt("Ingreso su sexo");
// let nacionalidad = prompt("Ingrese su nacionalidad");
// let nacimiento = prompt("Ingrese su fecha de nacimiento");

// let datos = `${nombre} ${apellido} ${sexo} ${nacionalidad} ${nacimiento}`;

// alert(datos)

// let confirmacionDeDatos = prompt("Son correctos los datos?")

// const dni = {
//     nombre: nombre,
//     apellido: apellido,
//     sexo: sexo,
//     nacionalidad: nacionalidad,
//     nacimiento: nacimiento,
// }


// if (confirmacionDeDatos === "si"){
//     alert("Regristro Exitoso")
//     console.table(dni)
    
// } else {
//     alert("Vuelva en un mes");
// }