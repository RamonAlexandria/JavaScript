var idade = 65
if (idade >=18 && idade < 65){
    console.log(`${idade} anos, É obrigado a votar.`);
}
else {
    if (idade >=16 && idade < 18 || idade >= 65){
    console.log(`${idade} anos, Poode Votar, sem obrigação.`)
    }
    if(idade < 16) {
        console.log(`${idade} anos, você não tem idade para votar.`)
    }
}