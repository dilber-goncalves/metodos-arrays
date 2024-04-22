const carros = [
    {nome: 'corolla', marca: 'toyota', ano: '2020', cor: 'prata'},
    {nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto'},
    {nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata'},
    {nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco'}
];

const buscarCarro = (marca, arrayCarros) => {
    const busca = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
    console.log(busca);
}

//const resultado = buscarCarro ('toyota', carros);
//console.log(resultado);

buscarCarro('toyota', carros);

const resultado = carros.findIndex((carro) => {
    return carro.nome === 'ranger';
});

console.log( resultado);
