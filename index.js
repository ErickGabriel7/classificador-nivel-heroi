const classifyXP = require('./functions');
const prompt = require('prompt-sync')();

let name = prompt('Digite o nome do herói: ');

let xpValid = false;
let xp;
while (!xpValid) {
  xp = prompt('Digite a quantidade de xp do herói: ');
  if (xp < 0) {
    console.log('Dados incorretos, tente novamente.');
  } else {
    xpValid = true;
  }
}

console.log(classifyXP(name, xp));
