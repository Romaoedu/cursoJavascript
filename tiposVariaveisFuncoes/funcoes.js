// 1) declara a função

function imprimiTexto(texto) {
    console.log(texto);
}

// 2) executa a função ( 1 ou + vezes)

imprimiTexto(soma())
imprimiTexto('outro texto')

function soma() {
    return 2 +2 
    
}
console.log(soma());