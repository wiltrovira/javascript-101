// Esta es una variable global
var nombre = "Paola";
var pais = "Colombia";

// Así se declara la Primera función
function primeraFuncion(){

    console.log("primeraFuncion() invocada...");

    // Esta variable es local a la función
    var nombre = "Wilt Rovira";
    console.log("primeraFuncion() - nombre: ", nombre);

    // Esta variable es global
    console.log("pais: ", pais); //se imprime bien porque está declarada al principio

    // Esta función no existe en ningún lado
    // console.log("variable a: ", a); //genera error porque la variable no está definida

    // Esta función no existe en ningún lado
    console.log("variable b: ", b); //Imprime undefined porque la variable está definida después de la invocación de la función

    console.log("Fin de primeraFuncion()")
}

// Función imprimir()
function imprimir(nombre, apellido){

    //se puede validar si un parámetro es undefined
    if(apellido === undefined){
            apellido = "apellido=undefined";
    }

    //también se puede hacer una validación en una sola línea
    nombre = nombre || "nombre=undefined";

    //imprime las 2 variables
    console.log(nombre + " " + apellido);   
}


// Función imprimirPersona() para imprimir los datos de la persona
// Esta función recibe un objeto de tipo persona
function imprimirPersona(obj){
        //se puede validar si un parámetro es undefined
    if(obj.apellido === undefined){
            obj.apellido = "apellido=undefined";
    }

    //también se puede hacer una validación en una sola línea
    obj.nombre = obj.nombre || "nombre=undefined";

    //imprime las 2 variables
    console.log("obj.nombre: " + obj.nombre + " " + "obj.apellido: " + obj.apellido);   
}


//Las funciones también pueden recibir otras funciones
function imprimirFuncion(fn){
    fn(); //Esto ejecuta la función que se recibió como parámetro
}


// Así se invoca o ejecuta la primeraFuncion()
primeraFuncion();

var b = "variable después de la función";


//Todas las funciones retornan un valor
var miPrimeraFuncion = primeraFuncion();
console.log("valor que retorna primeraFuncion(): ", miPrimeraFuncion );  //retorna undefined

//El llamado a la función debe tener paréntesis.
var miFuncion = primeraFuncion;  //Contiene la definición de la función


// Parámetros de las funciones
imprimir("Juan", "Pérez"); //ejecuta la función con 2 parámetros
imprimir("Juan"); //con 1 parámetro
imprimir(); //sin parámetros  


//Función que recibe un objeto anónimo con las propiedades de una persona
imprimirPersona({nombre:"María", apellido:"Pérez"});

//También se puede enviar un objeto nombrado
persona = {
    nombre: "Mateo",
    apellido: "Rodríguez"
}
imprimirPersona(persona);


//Demostración de cómo se puede enviar una función a otra función
//Esto demuestra que las funciones son objetos

//Aquí se va a enviar una función anónima
imprimirFuncion(
    //esta es una función anónima
    function(){
        console.log("esta es la función anónima");    
    }
);

//Esta es una función creada como expresión
var miFuncion = function(){
    console.log("esta es la función creada como expresión");    
};
imprimirFuncion(miFuncion);



