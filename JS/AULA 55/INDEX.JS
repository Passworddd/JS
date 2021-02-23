// Método Splice

const nomes = ['Natã','Johnatan','Danilo','Relva','Brito'];
const nomesTest0 = [...nomes];
const nomesTest = [...nomes];

// nomes.splice(index_inicial,quantos_elementos_quero_romover,elementos para separa 1, elementos para serapar 2);

// quero remover o ultimo elemento do arrey =>

//nomes.splice(4, 1); // Quero remover do index 4 apenas um elemento


const nomesRemovidos = nomes.splice(1,nomes.length) // Retira todos os elementos desde o 1 até o ultimo e passa para nomesResmovidos

console.log(`${nomesRemovidos} --- Vetor resultado`); // A função também pode retorna o elemento que foi removido, retornando um arrey, porque ele pode retorna mais de um elemento.bloco_data
console.log(`${nomes} --Vertor Origem`);

// Existe a posibilidade de colocar números negativos como argumento de inicializão, apenas modificando o sentido do percurso (negativo = da direita para esquerda);

const nomesRemovidos2 = nomesTest.splice(-2); // Remove dois elementos
console.log(nomesRemovidos2);

// Negativo é = tamanho do array - o modulo do index passado;

const nomesRemovidos3 = nomesTest.splice(-2, Number.MAX_VALUE); // Max valor siginifica a maior variavel que o java suporta

// ADICIONAR ELEMENTOS NO INDEX INDICADO SEM ALTERAR OS VALOS DOS OUTROS INDEX DO ARREY

nomesTest0.splice(2,0,'FODÃO'); // (INDEX QUE SERA TROCADO, NUMERO DE ELEMENTOS REMOVIDOS, ELEMENTO A SER SUBSTITUIDO)

console.log(`${nomesTest0}---->Variável Original<-----`);
nomesTest0.splice(-1); // Da pra colocar qualquer coisa até um onjeto
console.log(`${nomesTest0}---->Variável pop<--------`);
nomesTest0.splice(0,1);
console.log(`${nomesTest0}---->Variável shift<------`);
nomesTest0.splice(nomesTest0.length, 0,"Nova Variavel");
console.log(`${nomesTest0}---->Variável push<------`);

