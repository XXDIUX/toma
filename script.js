
const notas = [7, 8, 8, 9, 5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;
console.log("Média calculada com for loop:", media);