const campo = document.querySelector('.campo1');

const div = document.createElement('div');

const elementos = [
    {tag: 'p' , texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for(let i = 0 ; i < elementos.length; i++){
    let {tag , texto } = elementos[i];
    let criarTag = document.createElement(tag);
    //criarTag.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    criarTag.appendChild(textoCriado);
    div.appendChild(criarTag);
}

campo.appendChild(div);



















/**

const campo = document.querySelector('.campo1');
const div = document.createElement('div'); // Um objeto do tipo divisão sera criada

const elementos = [ // Tenho um vetor de objetos
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'},// 3
];

for(let i = 0; i < elementos.length; i++){
    let {tag,texto} = elementos[i]; // Atribuição por desestruturação de um objeto -- Esta passando os valores de nome de tag e texto para duas variaveis recem criadas
    let tagCriada = document.createElement(tag); // tagCriada vai receber como propriedade um nome de tag que pegou o valor recem desestruturado acima 
    tagCriada.innerHTML = texto;// tagCriada vai receber o valor de texto 
    div.appendChild(tagCriada)// a div criada antes do escopo do for ira receber a tagCriada como elemento e o processo vai pilhando os elementos criados até chegar no final do array
}

campo.appendChild(div); // o campo em fim recebe como filho a estrutura de divição com as tags filhas dela recem criadas

 */


/**
const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'},// 3
];

const [tag0,tag1,tag2,tag3] = elementos;



const creatP = () => document.createElement(tag0.tag);
const creatDiv = () => document.createElement(tag1.tag);
const creatFooter = () => document.createElement(tag2.tag);
const creatSection = () => document.createElement(tag3.tag);


p = creatP();
div = creatDiv();
footer = creatFooter();
section = creatSection();

p.innerHTML = tag0.texto;
campo.appendChild(p);

div.innerHTML = tag1.texto;
campo.appendChild(div);

footer.innerHTML = tag2.texto;
campo.appendChild(footer);

section.innerHTML = tag3.texto;
campo.appendChild(section);
 */