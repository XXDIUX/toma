
const notas = [7, 8, 8, 9, 5];
let soma = 0;
let i = 0;

while (i < notas.length) {
    soma += notas[i];
    i++;
}

const media = soma / notas.length;
console.log("Média calculada com while loop:", media);