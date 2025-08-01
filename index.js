import {number} from "@inquirer/prompts"

console.log("Boas vindas ao jogo de de adivinhação!")

// computador gera um numero aleatório entre 1 a 100
// tem 7 tentativas para acertar
// a cada tentativa o programa informa se o numero está abaixo ou acima do escolhido

const numeroAleatorio = Math.floor(Math.random()*101)
let numeroTentativas = 7

while(numeroAleatorio > 0){

    let palpite = await number({message:"Digite um numero de 0 a 100"})
    
    if(palpite === numeroAleatorio){
        console.log("Parabéns! Você acertou!")
        break
    }else if(palpite > numeroAleatorio){
        console.log("Muito alto, tente um numero menor")
     }else if(palpite < numeroAleatorio){
        console.log("Muito baixo, tente um numero maior")
    }else {
        numeroTentativas++
        console.log("Entrada não é um numero válido")
    }
    numeroTentativas = numeroTentativas - 1
}

if (numeroTentativas === 0){
    console.log(`As tentativas acabaram! O número certo era ${numeroAleatorio}`)
}