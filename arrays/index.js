//let nota1 = 10
//let nota2 = 6.5
//let nota3 = 8
//let nota4 = 7.5
//
//let media = (nota1 + nota2 + nota3 + nota4) / 4;
//
//console.log(media);

const notas = [10, 6.5, 8, 7.5]
// inclui um elemento no array

notas.push(10)

// Tira o ultimo elemento do array
notas.pop()

let media = (notas[0] + notas[1] + notas[2] + notas[3] )  / notas.length
console.log(`A media é ${media}`);