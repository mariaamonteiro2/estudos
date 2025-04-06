const idadeBia = 24;
const idadeMatteo = 25;

console.log("Bia é mais velha que Matteo? ", idadeBia > idadeMatteo);
console.log("Matteo é mais valho que Bia? ", idadeMatteo > idadeBia);
console.log("Bia é mais nova que Matteo? ", idadeBia < idadeMatteo);

console.log("Bia tem idade igual ou menor do que de Matteo? ", idadeBia <= idadeMatteo);

const maioridade = 18;

console.log("Bia é maior de idade? ", idadeBia >= maioridade);

const x = 10;
const y = 20;
const z = "10";

console.log("O número ", + x + " é igual que o numero " + y, x===y); //operadr de igualdade estrita
console.log("O número ", + x + " é igual que o numero " + z, x==z); //operador de igualdade frouxa

console.log("O número " + x + " é diferente do número " + y, x!==y);
console.log("O número " + x + " é diferente do número " + z, x!==z);

console.log("O número " + x + " é diferente do número " + z, x!=z);

// sempre optar pelos ESTRITOS ao falar de igualdade e desigualdade