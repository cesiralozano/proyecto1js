
//Proyecto sobre una obra social, en el siguiente ejemplo quiero que el usuario coloque su nombre y mi programa le de la bienvenida//


//FUNCION BIENVENIDA CON ALGORITMO CICLO//

/*function nombreUsuario() {
    let usuario = prompt("Por favor, ingrese su nombre de usuario:");
    while (usuario !== null && usuario !== "esc") {
        console.log("Bienvenid@" + usuario);
        usuario = prompt("Por favor, ingrese su nombre de usuario:");
    }
}
nombreUsuario()*/




//Luego le solicitara la edad y segun lo que ingrese el cliente el programa debe indicarle segun su edad que plan le corresponderia consultar para contratar y en conjunto con la siguiente funcion totalaportes, me gustaria que seguido el cliente ingrese si posee o no aportes para luego ingrese el importe de aportes a derivar y que este le calcule en un aproximado cuanto terminaria abonando de cuota//

//FUNCION EDAD CON UN ALGORITMO CONDICIONAL //

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


//FUNCION APORTES CON UN ALGORITMO CONDICIONAL//


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




//Luego tiene la opcion que si el cliente puede segun las normativas del gobierno pueda descontar el iva de su cuota//

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


//Aqui el cliente cuando busque a nuestro proveedores segun la especialidad, tambien le de la opcion de imprimir y abonar la orden de consulta ya desde nuestra pagina, la cual este dato tendria que impactar con la cuenta corriente del sistema que posee la obra social contable//

//FUNCION COMPRA ORDENES//

/*
let precioOrdenes = 3000;
function ordenes(){
    let cantidad = parseInt(prompt('Ingrese la cantidad de ordenes que desea comprar'));

    if(!isNaN(cantidad) && cantidad > 0){
        let resultado = precioOrdenes * cantidad;
        console.log ('Importe a abonar:' ,  resultado);
    }else{
        console.warn("Por favor, ingrese una cantidad válida");
    }
}
ordenes();
*/





//CONSULTA//


//ALGORITMO UTILIZANDO CICLO// este ciclo ya lo pude hacer con una funcion pero en la practica cuando estaba practicando el cliclo for arme este y quisiera saber si lo sube armar bien 


    /*let edad = prompt("Por favor, ingrese su edad:");
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




