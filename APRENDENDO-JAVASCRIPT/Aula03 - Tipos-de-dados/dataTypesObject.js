const fichaDaMaria = {
    nome: "Maria",
    idade: 23,
    profissão: "programadora",
    temFilhos: false,
};

console.log("Ficha da Maria: ", fichaDaMaria);

// consultar apenas uma propriedade do objeto
console.log ("Nome: " + fichaDaMaria.nome);

fichaDaMaria.carro = "Porshe";

console.log(`Ficha da Maria`, fichaDaMaria);


delete fichaDaMaria.carro;
console.log(`Ficha da Maria`, fichaDaMaria);