const listaDeConvidados = ["Matheus", "Izabelli", "Amanda", "Paula"];

// Push / Pop / Shift / Unshift

//adiciona
listaDeConvidados.push("Leornado");

console.log(listaDeConvidados);

//remove o ultimo item da lista
listaDeConvidados.pop();
console.log(listaDeConvidados);

// inicio da array

listaDeConvidados.unshift("Maria");
console.log(listaDeConvidados);

// remove o primeiro item da lista
listaDeConvidados.shift();
console.log(listaDeConvidados)

//checa um item na lista
console.log("Amanda está na lista? ", listaDeConvidados.includes("Amanda"));
 
