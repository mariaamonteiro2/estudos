// valores Truthy e Falsy


// são diferentes de true e false


// 5 valores que o JS identifica como falsy: 0, "", underfined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("-------------------------");



// Exemplos de valores truthy (valores que quando convertidos para boolean são true);
// console.log(Boolean(1));
// console.log(Boolean("Olá Mundo!"));
// console.log(Boolean({valor1: 1, valor2: 2}));
// console.log("Array: ", Boolean([]));
// console.log("Obejto vazio: ", Boolean({}));


const nomes = ["Maria", "João", "" , "Matheus"];
console.log("Nomes: ", nomes);


// const nomesFiltrados = nomes.filter((nome) => Boolean(nome));
// console.log("Nomes filtrados: ", nomesFiltrados);

// const nomesFiltrados = nomes.filter((nome) => (nome));
// console.log("Nomes filtrados: ", nomesFiltrados);


//-----------------------------------------------

nomes.forEach(nome => {
    if(nome){
        console.log("é truthy: ", nome);
    }
});


const x = 10;
const y = null;

// if (x){
//     console.log("X é uma variavel truthy");
// }

// if (y){
//     console.log("Y é uma variavel truthy");
// }