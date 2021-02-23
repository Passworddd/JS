// Funções construtoras retornam -> objetos (fabrica != construir)
// Função fabrica -> objeto
// Construtora -> Pessoa(new) -> Pessoa vira um moude para novos objetos

function Pessoa(nome, sobrenome) {
    //Privados
    const ID = 123456;
    const metodoInterno = function(){

    };
    /** O corpo já vira um objeto */
    // Atributos ou Metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ' Deu bom');
    };
}

const pessoa1 = new Pessoa('Natã', 'Relva');
const pessoa2 = new Pessoa('Telma', 'Rodriguês'); // new cria um objeto vazio faz o this apontar para o objeto vazio retornando o objeto a variável.bloco_data

console.log(pessoa2.metodo())
