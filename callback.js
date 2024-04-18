//passar funcao dentro de outra funcao

/*const imprimirNome = () => {
    console.log('Nome Aqui');
}

setTimeout(imprimirNome, 5000);*/

setTimeout(function(){//executa apenas uma vez
    console.log("Mensagem!!");
}, 1000);

const imprimir = () => {
    console.log("Ola Pessoa!");
    clearInterval(interval);//interrompe a contagem
}
const interval = setInterval(imprimir, 1000);//executa varias vezes no intervalo de tempo
//////////////////
let numero = 0;
const contador = setInterval(function() {
        console.log(numero);
        numero++;
}, 1500);