"use strict"

/*let n1 = [10,20,30]
let n2 = [11, 22, 33, 44, 55]
let n3 = 

console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);*/

const jogador1 = {nome: "Bruno", magia: 100, poder: 80, velocidade: 50, força: 180, energia: 90}
const jogador2 = {nome: "Bruce", magia: 100, poder: 80, velocidade: 40, força: 180, vida: 200}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3) 