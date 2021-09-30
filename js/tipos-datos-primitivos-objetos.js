//El resultado es undefined, porque la variable no está declarada
console.log(a); 
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Declara las variables
// Hay 5 tipos de datos
var a = "Wilt"; //texto
var b = 3; //número
var c = true; //boolean
var d = undefined; //null
var e = null; //indefinido

// Imprime los valores correctos en consola
console.log(a); 
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Ojo: undefined no es igual a null
console.log(d === e)


//Objetos
var obj = {
    numero: 10,
    texto: "nuevo texto",
    booleano: true
};
console.log(obj);

//Los objetos pueden tener otros objetos dentro
var objPadre = {
    nombre: "Wilt",
    edad: 44,
    casado: true,
    objHijo: {
        nombre: "Tomás",
        edad: 2
    },
    ubicacion: {
        pais: "Colombia",
        ciudad: "Medellín",
        direccion: "Transversal 53A #65-70",
        edificio: "Madrid Aptos"
    }
};
console.log("objPadre: ", objPadre);
console.log("objPadre.nombre: ", objPadre.nombre);
console.log("objPadre.objHijo: ", objPadre.objHijo);
console.log("objPadre.objHijo.nombre: ", objPadre.objHijo.nombre)
console.log("objPadre.ubicacion.direccion: ", objPadre.ubicacion.direccion);

// También se pueden agregar propiedades a un objeto
objPadre.objHijo.nacionalidad = "Colombiano";
console.log("objPadre.objHijo: ", objPadre.objHijo);
console.log("objPadre.objHijo.nacionalidad: ", objPadre.objHijo.nacionalidad);

// Se puede crear un objeto que haga referencia al objeto interno
var objHijo = objPadre.objHijo;
objHijo.genero = "Masculino";
console.log("objHijo.genero: ", objHijo.genero);
console.log("objPadre.objHijo: ", objPadre.objHijo);

// Notación de corchetes
console.log("objPadre['nombre']: ", objPadre["nombre"]);
console.log("objPadre['ubicacion']['pais']: ", objPadre["ubicacion"]["pais"]);

// También se pueden utilizar campos
campoNombre = "nombre";
campoPais = "pais"

console.log("objPadre[campoNombre]: ", objPadre[campoNombre]);
console.log("objPadre['ubicacion'][campoPais]: ", objPadre["ubicacion"][campoPais]);



