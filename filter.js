/*const numeros = [1, 4, 4, 5, 3, 1, 8];

const resultadoNumeros = numeros.filter((numero) => {
    return numero === 4;
});

console.log(resultadoNumeros);*/

const professores = [
    {nome:'Guido', stack:'backend'},
    {nome:'Vidal', stack:'backend'},
    {nome:'Dani', stack:'frontend'},
    {nome:'Diego', stack:'frontend'},
    {nome:'Léo', stack:'backend'},
    {nome:'Ruli', stack:'frontend'},
];

const professoresBackend = professores.filter((professor) => {
    return professor.stack === 'backend';
});

console.log(professoresBackend);

const professoresFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

console.log(professoresFrontend);