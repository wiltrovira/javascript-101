/*
    Paso por valor
*/
// Las variables primitivas siempre se pasan por valor
var a  = 10;
var b = a;

console.log("a: ", a);
console.log("b: ", b);

a = 20;
console.log("a: ", a);
console.log("b: ", b);

/*
Paso por referencia
*/
var obj = {
    nombre: "Juana"
};
var obj2 = obj;

console.log("obj: ", obj);
console.log("obj2: ", obj2);

//se cambia la propiedad de un objeto desde la primera variable
obj.nombre="María";

console.log("obj: ", obj);
console.log("obj2: ", obj2); //El obj2 tiene el mismo valor que obj

//se cambia la propiedad de un objeto desde la otra variable
obj2.nombre="Pedro";

console.log("obj: ", obj);
console.log("obj2: ", obj2); //El obj2 tiene el mismo valor que obj