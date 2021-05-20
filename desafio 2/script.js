//DESAFIO 2//
let idade = 18
let souHumano = true
let imHuman = false
let aniversario = "Janeiro"
let birth = "Dezembro"
let nome = "Ryan"
let sobrenome = "Oliveira"

if (idade >= 18){
    console.log("thats the end of the free trial version of your life, now you have to pay")
}
if (idade >= 18 && souHumano == true){
     console.log (" Um sobrevivente maior de 18,junte se a nós na resistencia contra as máquinas")
}
if ( souHumano == true) {
    console.log( "Ainda a esperança contra a revolta das maquinas.")
} else{
    console.log("Parece que a Humanidade sucumbiu, as maquinas venceram.")
}

if (aniversario == "janeiro" || birth == "Dezembro"){
    console.log ("Parabéns")
}
if(nome.substring(0,1) === "R"){
    console.log ("Inicial R")
} else{
    console.log ("não inicia com R")
}
if( sobrenome.length >=6 || nome.substring(0,1) === "E"){
    console.log (" atende a um ou mais requisistos")
}
//DESAFIO 2//
