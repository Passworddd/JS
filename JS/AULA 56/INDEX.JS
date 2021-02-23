// Duas maneiras <----> 1º:
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2,[7,8,9],'Luiz');

console.log(a3);

// Segunda maneira <---> 2º Usando spread

const a4 = ['Nata','Jonatan'];
const a5 = ['Danilo', 'Relva', 'Brito'];
const a6 = [...a4,...a5,...[7,8,9]] // Spread é os 3 pontos antes da variável, ele espalha
// os calores do array para a constate 

console.log(a6)