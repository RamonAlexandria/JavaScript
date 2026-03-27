"use strict"

if (true) {
    var name = "João"; // var vaza
    let idade = 25;    // let fica presa
}

console.log(name);  // Funciona: "João"
console.log(idade); // Erro: idade is not defined

let nome = "Ramon"

nome = "Alexandria"
console.log(nome);

let n1 = 5, n2 = 10, n3 = 20;

let n4 = (n1 + n2 + n3)*1;

if (n4 >= 70) {
    console.log("Olá mundo.")
}
else {
    console.log("Segunda Opção.")
}



function comer () {
    console.log('olá mundo.')
}

comer()*/

let num = 4

let resp = num%2

if (resp == 0) {
    console.log("Par")
}
else {
    console.log("Impar")
}