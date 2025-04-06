const idadeMaria = 16;
const maioridade = 18;

if ( idadeMaria >= 18){
    console.log("Maria pode dirigir? ");
}else{
    const anosFaltantes = maioridade - idadeMaria;
    console.log("Maria não pode dirigir!");
    console.log(`Faltam ${anosFaltantes} anos para Maria poder dirigir!`);
}

// Operadores ternarios
//idadeMaria >= 18 
//? console.log("Maria pode dirigir") 
//: console.log("Maria não pode dirigir!");

console.log("---------------------------");


const idadePessoa = 61;

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolêscente
// 18 a 25 anos -> jovem adulto
// 25 a 60 anos -> adulto
// mais que 60 anos -> idoso



if (idadePessoa >= 0 && idadePessoa <= 12){
    console.log("infância");
}else if (idadePessoa >= 13 && idadePessoa <= 17){
    console.log("Adolescência");
}else if (idadePessoa >= 18 && idadePessoa <= 25){
    console.log("Jovem adulto");
}else if (idadePessoa >= 25 && idadePessoa <= 60){
    console.log("Adulto");
}else {
    console.log("Idoso");
}

console.log("--------------------------");

const x = 20;

if (x % 2 === 0){
    console.log(`O número ${x} é par`);
}

if (x % 5 === 0){
    console.log(`O número ${x} é multiplo de 5 `);
}


console.log("-----------------------------");

const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1:
        nomeDoDia = "Segunda-Feira";
    break;
    case 2:
        nomeDoDia = "Terça-Feira";
    break;
    case 3:
        nomeDoDia = "Quarta-Feira";
    break;
    case 4:
        nomeDoDia = "Quinta-Feira";
    break;
    case 5:
        nomeDoDia = "Sexta-Feira";
    break;
    case 6:
        nomeDoDia = "Sabado";
    break;

}

console.log ("Dia da semana " + nomeDoDia);
