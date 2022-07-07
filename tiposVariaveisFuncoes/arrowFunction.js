//function apresentar(nome) {
//    return(`meu nome é ${nome}`)
//}

// Arrow function com uma linha

const apresentaArrow = nome => `meu nome é ${nome}`;
console.log(apresentaArrow('Eduardo'));

// Arrow function com mais de de uma linha

const somaNumerosPequenos = (num1, num2) =>{
    if (num1 >= 10 || num2 >= 10  ) {
        return `somente números de 1 a 9`
    }
    else {
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(9,3));
somaNumerosPequenos.call(1,1)