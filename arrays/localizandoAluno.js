const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 8, 7.5, 9]

// .includes retorna um boleano
// indexof retorna um number

let listaDeNotasAlunos = [alunos, mediaDosAlunos]

function exibeNomeDoAluno(nomeDoAluno) {
    if (listaDeNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasAlunos[0].indexOf(nomeDoAluno)
        return  listaDeNotasAlunos[0][indice] + ` , sua media é  ` + listaDeNotasAlunos[1][indice]
    }
}
console.log(exibeNomeDoAluno('Caio'));
