//verifica se todos são maiores de idade --- utilizando o EVERY

const usuarios = [
    {nome: 'Joao', idade: 23},
    {nome: 'Maria', idade: 18},
    {nome: 'Ana', idade: 30},
    {nome: 'Rodrigo', idade: 19}
];

const verificarIdades = (arrayUsuarios) => {
    const resultado = arrayUsuarios.every((usuario) => {
        return usuario.idade > 17;
    });
    if (resultado){
        console.log('Festa liberada');
    }else{
        console.log('Possui menor de idade');
    }
}

verificarIdades(usuarios);