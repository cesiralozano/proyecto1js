
//Proyecto sobre una obra social, en el siguiente ejemplo quiero que el usuario coloque su nombre y mi programa le de la bienvenida, luego le solicitara la edad y segun lo que ingrese  mi programa debe indicarle segun su edad que plan le corresponderia y luego le pregunta si posee aportes para derivar, si posee se le pide que ingrese el importe de aportes y luego el nombre del plan que se le otorgò segun su edad, luego tiene la opcion de descontar el iva, Luego la opcion para comprar descartables (estas funciones me gustaria colocarlas en distintas pages de mi sitio, para que el usuario segun lo que esta consultando le salte la opcion)



//FUNCION CON ALGORITMO CICLO//

/*function nombreUsuario() {
    let usuario = prompt("Por favor, ingrese su nombre de usuario:");
    while (usuario !== null && usuario !== "esc") {
        console.log("Bienvenid@" + usuario);
        usuario = prompt("Por favor, ingrese su nombre de usuario:");
    }
}
nombreUsuario()*/




//FUNCION CON UN ALGORITMO CONDICIONAL//


/*function identificarEdad(){
    edad = prompt("Por favor, ingrese su edad:");
    if (!isNaN(edad)) {
        if (edad >= 1 && edad <= 60) {
        console.log("A usted le corresponde el Plan Vital.");
        } else if (edad > 60 && edad <= 100) {
        console.log("A usted le corresponde el Plan Senior.");
        } else {
        console.error("Lo siento, no tenemos un plan disponible para su edad.");
        }
    } else {
    console.warn("Por favor, ingrese una edad válida.");
    }
}
identificarEdad()*/




//FUNCION 2 CON UN ALGORITMO CONDICIONAL//


/*function totalaportes(){
    declaracionAportes = prompt("Posee aportes para derivar? Coloque 'si' o 'no'").toLowerCase();
    if(declaracionAportes === 'si') {
        let aporte = parseFloat(prompt("Ingrese el monto a derivar de aportes y le daremos un aproximado de monto a pagar por el plan elegido"));
        if (isNaN(aporte)) {
            console.warn("Por favor, ingrese un monto válido");
        } else {
            let nombrePlan = prompt("Por favor, indique el nombre de su plan:");
        nombrePlan = nombrePlan.toLowerCase();

        if (nombrePlan === 'vital') {
            let precioPlan = 10000; // Precio del plan
            let precioConAporte = precioPlan - aporte; // Calcular el precio con aporte
            console.log("El precio del Plan Vital con su aporte es: " + precioConAporte);
        } else {
            console.error("Lo siento, el cálculo solo se aplica al Plan Vital.");
        }
    }
} else if (declaracionAportes === 'no' && declaracionAportes === 'esc') {
    console.error("No tiene aportes para derivar.");
} else {
    console.warn("Por favor, responda 'si' o 'no' para indicar si tiene aportes.");
}
}
totalaportes()*/





//FUNCION DESCUENTO DE IVA//

/*
let vital = 10000;
let senior = 30000;
let iva = 21; 
function descuentoIva() {
    let plan = prompt("Ingrese su plan 'Vital' o 'Senior'").toLowerCase();
    
    if (plan === 'vital') {
        let importeSinIva = vital * (iva / 100);
        console.log("Su importe a abonar (con descuento de IVA) es:" , vital - importeSinIva);
    } else if (plan === 'senior') {
        let importeSinIva = senior * (iva / 100);
        console.log("Su importe a abonar (con descuento de IVA) es:" , senior - importeSinIva);
    } else {
        console.error("Debe ingresar un plan válido: 'Vital' o 'Senior'.");
    }
}
descuentoIva();
*/



//FUNCION PRECIO DESCARTABLES//

/*
let precioDescartables = 3000;
function descartables(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de descartables que desea comprar'));

    if(!isNaN(cantidad) && cantidad > 0){
        let resultado = precioDescartables * cantidad;
        console.log ('Importe a abonar:' ,  resultado);
    }else{
        console.warn("Por favor, ingrese una cantidad válida");
    }
}
descartables();
*/





//ALGORITMO UTILIZANDO CICLO// se que no es necesario en este caso utilizar un for, solo con el if puedo hacer la misma ejecucion pero no sabia de que otra manera implementar un ciclo en mi proyecto.
/*for (let i = 1; i <= 100; i++) {
    let edad = prompt("Por favor, ingrese su edad:");
    let edad2 = parseInt(edad);

    if (!isNaN(edad2)) {
        if (edad >= 1 && edad <= 60) {
        alert("A usted le corresponde el Plan Vital.");
        } else if (edad > 60 && edad <= 100) {
        alert("A usted le corresponde el Plan Senior.");
        } else {
        alert("Lo siento, no tenemos un plan disponible para su edad.");
        }
    } else {
    alert("Por favor, ingrese una edad válida.");
    }
}*/




