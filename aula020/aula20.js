"use strict"
/*function nome(){
console.log("Olá mundo.")
}

---------------------------------------------

function soma(){
    let n1 = 2
    let n2 = 10
    let resp = n1 + n2
    console.log(resp)
}

for(i=0; i<10; i = i+1){
    soma()
}

-------------------------------------------------------------- 

function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML="Ramon"
    d2.innerHTML="Ramon"
    d3.innerHTML="Ramon"
}*/

function canal(){
    let n1 = 10
    let n2 = 2
    let resp = n1*n2
    if(resp %2 == 0){
    return resp + ", Par"}
    else {
        return resp + ", Ímpar"
    }
}

let num = canal()

console.log(num)