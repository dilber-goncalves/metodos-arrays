const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every(function(elementoAtual){
    return elementoAtual !== 'banana';
});

console.log(resultado);//true, falando que todos os elemento sao diferentes do que foi solicitado