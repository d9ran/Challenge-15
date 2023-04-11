let priNum = parseInt(prompt("Ingrese el primer número"));
let segNum = parseInt(prompt("Ingrese el segundo número"));

let resta = priNum - segNum;
let producto = priNum * segNum;


console.log("La resta es de " + resta);
console.log("El producto es de " + producto);

let nombre = prompt("Cuál es tu nombre?");

let apellido = prompt("Cuál es tu apellido?");

if (nombre.includes('a' || 'm')){
    console.log("Tu nombre contiene las letras \"a\" o \"m\" ");
} else{
    console.log("Tu nombre no contiene las letras \"a\" o \"m\" ");
}

if (apellido.includes('a' || 'm')){
    console.log("Tu apellido contiene las letras \"a\" o \"m\" ");
} else{
    console.log("Tu apellido no contiene las letras \"a\" o \"m\" ");
}