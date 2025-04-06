const lisaDeConvidados = ["Matheus", "Izabelli", "Paula", "Amanda"];
console.log("Bia fez aniversario e convidou: ", lisaDeConvidados);

console.log("Quantos convidados? ", lisaDeConvidados.length); 

// 1.Matheus
// 2.Izabelli 
// 3.Amanda
// 4.Paula

console.log("Convidado numero 1: ", lisaDeConvidados[0]);
console.log("Convidado numero 4: ", lisaDeConvidados[3]);

console.log("Convidado numero 4: ", lisaDeConvidados[lisaDeConvidados.length - 1]);


const indiceAmanda = lisaDeConvidados.indexOf("Amanda");
console.log("Amanda está em qual índicedo nosso array? ", indiceAmanda);

console.log("Amanda está em qual número da lista? ", indiceAmanda );

const arrayQualquer = ["Beatriz", true, 24, {valor1: 10, valor2: 20}];
console.log(arrayQualquer);