//DESAFIO 6//

let Dados = [
    {
        nome:"Amauri",
        idade: 25,
        Hobbie: "Jogar",
    }
]

Dados.curiosidade = "quando algo lhe prende atenção, acaba ficando preso até se sentir saciado pelo conteudo"
delete Dados.Hobbie


console.log (Dados)

let cadastro = [
    {
        nome:"Cozinha",
        idade: 1,
        telefone:"local de preparo de alimentos",
        amigos:["Facas","garfos","colheres","cutelo"]
    },

    {
        nome:"escritorio",
        idade:1,
        telefone:"local de trabalho e estudos",
        amigos:["Teclado","Folhas","cadernos","canetas"]
    },
    
    {
        nome:"quintal",
        idade: 1,
        telefone:"área externa, banheiro do cachorro",
        amigos:["cachorro","casa do cachorro","torneiras","insetos"]
    },
    
    {
        nome:"quarto",
        idade:1,
        telefone:"Local para descanso",
        amigos:["Cama","colchão","armário","roupas"]
    },
    
    {
        nome:"sala",
        idade:1,
        telefone:"local de lazer e entreterimento",
        amigos:["TV","sofá","mesa",""]
    }

]

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1]) 



//DESAFIO 6//
