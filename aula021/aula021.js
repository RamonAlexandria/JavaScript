"use strict"
const valorPadrao = 0

function soma(n1 = valorPadrao, n2 = valorPadrao){
    let resu = n1 * n2;
    return resu;
}
let resultado = soma(10,5);

console.log(resultado);

//-----------------------------------------------------------------------------

let valor = 0

console.log(valor)

function add(v){
    return valor+v
}

valor = add(10)

console.log(valor)

valor = add(5)

console.log(valor)