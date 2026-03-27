"use strict"

/*let num = 15;

if(num > 10){
    console.log("Maior que 10")

    if (num > 10 && num < 20){
        console.log("Maior que 10, mas é menor que 20.")
    }
        else if (num > 20 && num < 30){
            console.log("maior que 20, mas é menor que 30")
        }
        else{
            console.log("É maior ou igual a 30.")
        }

        }
    }
}
else if (num == 10 ){
    console.log("Igual a 10")
}

else {
    console.log("Menor que 10")
}

console.log("FIM DO PROGRAMA.");*/   // Erro nos testes a cima.


let num = 15;

if (num > 10) {
    console.log("Maior que 10");
            
    if (num > 10 && num < 20) {
        console.log("Maior que 10, mas é menor que 20.");
    } else if (num >= 20 && num < 30) {
        console.log("Maior ou igual a 20, mas é menor que 30");
    } else {
        console.log("É maior ou igual a 30.");
    }

} else if (num == 10) {
    console.log("Igual a 10");
} else {
    console.log("Menor que 10");
}

console.log("FIM DO PROGRAMA.");