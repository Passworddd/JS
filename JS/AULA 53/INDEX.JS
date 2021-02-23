// Função geradora =>

function* geradora1(){
    // Código qualquer
    yield 'Valor 1';
    // Código qualquer
    yield 'valor 2';
    // Código qualquer
    yield 'Valor 3';
    // Código qualquer
}
console.log('De acordo com o número de vezes que a função e retornada esse retorna uma valor diferente ')
const g1 = geradora1();
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

//Tipo de função e interavél logo podemos usar o for para pecorrer.bloco_data
console.log('-----------Pecorrer com um for------------------')
const g2 = geradora1();

for(let valor of g2){
    console.log(valor);
}
console.log('-----------Gerador infinito----------------------')

function* geradora2(){
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);

console.log('---------- Chamar função geradora dentro de outra-')

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let i of g4){
    console.log(i)
}

function* geradora5(){
    yield function() {
        console.log('Vim do y1');
    };

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1()