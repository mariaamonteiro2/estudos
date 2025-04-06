// funções são trechos de codigos que podem ser reutilizados depois

// função sem parâmetro e sem retorno
//function imprimir (){
//    console.log("Olá Mundo");
//}

//imprimir();

const imprimir = function imprimir(impressao){
    console.log(impressao);
}
imprimir("Ola mundo");

//function calcularSoma(valor1, valor2){
//    console.log (`A soma entre ${valor1} e ${valor2} é: ${valor1 + valor2} `);
//}


//function calcularSoma(valor1, valor2){
//    return valor1 + valor2;
//}
const valor1 = 2;
const valor2 = 4;

const calcularSoma = function (valor1, valor2){
    return valor1 + valor2;
}
imprimir(`A soma entre ${valor1} e ${valor2} é ${calcularSoma(valor1, valor2)}`);

//console.log(`A soma entre 5 e 5 é: ${calcularSoma(5,5)}`);

//--------------------------------

//function imprimir (impressao){
//    console.log(impressao);
//}

//imprimir("Olá mundo");
