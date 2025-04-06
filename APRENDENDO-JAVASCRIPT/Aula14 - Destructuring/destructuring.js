const nomes = ["Maria", "Beatriz", "Matheus"];

// const nome1 = nomes[0];
// const nome2 = nomes[1];
// const nome3 = nomes[2];

// console.log(nome1);


// const [nome1, nome2, nome3] = nomes;
// console.log("Nome 1: ", nome1)
// console.log("Nome 1: ", nome2)
// console.log("Nome 1: ", nome3)

const casais = [["Maria", "Décio"], ["Matheus", "Beatriz"]];

// const [casal1, casal2] = casais;

// console.log(("Casal 1: ", casal1), ("Casal 2: ", casal2));

// const [[nome1, nome2], [nome3, nome4]] = casais
// console.log("nome 1: ", nome1);
// console.log("nome 2: ", nome2);
// console.log("nome 3: ", nome3);
// console.log("nome 4: ", nome4);


// Desestruturação de Objetos


// const pessoa = {
//     nome: "Maria",
//     sobrenome: "Elena",
//     familia: ["Décio", "Beatriz", "Matheus"]
// }

// converter os valores do objetos em outros valores:

// const {
//     nome: primeiroNome,
//     sobrenome: segundoNome,
//     familia: membrosFamilia
// } = pessoa;

// console.log(primeiroNome, segundoNome, membrosFamilia);

//desestruturar uma propriedade dentro do objeto

const pessoa = {
    nomeCompleto: {
        nome: "Maria",
        sobrenome: "Elena"
    },
    familia:["Décio", "Beatriz", "Matheus"]
}

const {nomeCompleto: {nome: primeiroNome, sobrenome: segundoNome}, familia} = pessoa;

console.log(pessoa);

