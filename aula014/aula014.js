"use strict"

let permissao; // comum, gerente, diretor

permissao = "Ramon"

switch (permissao){
    case "comum":
        console.log('usuário Comum.')
        break
    case "gerente":
        console.log('usuário Gerente')
        break
    case "diretor":
        console.log('usuário Diretor')
        break
    default:
        console.log('usuário não encontrado')                          
}

//-----------------------------------------------------------------------------------------

let colocacao = 7

switch (colocacao){
    case 1:
        console.log('Primeiro Lugar')
        break
    case 2:
        console.log('Segundo Lugar')
        break
    case 3:
        console.log('Terceiro Lugar')
        break 
    case 4: case 5: case 6:
        console.log('Premio de Participação')
        break
    default:
        console.log('Não subiu ao pódio.')   
        break      
}
