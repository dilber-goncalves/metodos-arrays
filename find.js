const usuarios = [
    {nome: 'Joao', idade: 23},
    {nome: 'Maria', idade: 18},
    {nome: 'Ana', idade: 30},
    {nome: 'Rodrigo', idade: 17}
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'Joao';
});

console.log(resultado);

