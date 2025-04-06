const distanciaEmMetro = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

//MAP faz a conversão

// distanciaEmMetro.map((distancia) => {
//     const distanciaEmKm= distancia / 1000;
//     console.log("Distância em Km", distanciaEmKm);
//     return distanciaEmKm;
// });


const disntaciasEmKm = distanciaEmMetro.map ( distancia => distancia / 1000);
console.log(disntaciasEmKm);

// FILTER fitrar os metodos de um array

// const itemsFiltrados = distanciaEmMetro.filter(distancia => {
//     if (distancia > 2000) return distancia;
// });

// console.log(itemsFiltrados);

const itemsFiltrados = distanciaEmMetro.filter(distancia => distancia > 2000);

console.log("itens filtrados: ", itemsFiltrados);

// reduce

const distanciaTotal = disntaciasEmKm.reduce((acc, distancia)=>{
    return acc + distancia
},0);


console.log("Distância total: ", distanciaTotal);

// basicamente o reduce vai reduzir uma array em um só valor, começando pelo indice 0, por isso o acumalador (acc) ele soma com a distancia de cada elemento da array