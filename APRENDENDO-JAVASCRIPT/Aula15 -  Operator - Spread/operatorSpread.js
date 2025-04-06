// spread operator em arrays 

const listaBia = ["Maria", "Beatriz", "Matheus"];

//const listaMaeBia = [listaBia[0], listaBia[1], listaBia[2], "Sergio", "Valdete"];

//console.log("listaMaeBia: ", listaMaeBia);

// const listaMaeBia = [...listaBia, "Sérgio",  "Valdete"];
// console.log("listaMaeBia: ", listaMaeBia);


console.log("listaBia", listaBia);

const listaBia2 = [...listaBia];
listaBia2.push("Leonardo");
console.log("listaBia2", listaBia2);
console.log("-------------------------");
//-----------------------------------------

//spread operator em objetos

const professor1 = {
    materia: "Matematica",
    escola: "Escola bia codes",
    nome: "Beatriz"
}

const professor2 = {
    ...professor1,
    nome: "Décio"
}

console.log("Professor 1: ", professor1);
console.log("Professor 2: ", professor2);
