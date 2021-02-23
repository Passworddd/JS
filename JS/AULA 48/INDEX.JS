// Funções Fábrica
function criaPessoa(nome, sobrenoma, p, a) { // Cria um objeto tipo pessoa.
    return { // Retona objeto --> nome, sobrenome e um metodo 
        nome, sobrenoma,
        fala: function (assunto) {
            return `${this.peso} -- ${nome} está ${assunto}.`;
        },
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenoma}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },
        peso: p,
        altura: a,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Natã', 'Relva'); // Pesoa p1 recebe um objeto com nome e sobrenome um metodo de falar
console.log(p1.fala('falando sobre JS')); // p1.fala() retorna uma string

console.log(p1.nomeCompleto) // Vira variavel pelo get

p1.nomeCompleto = 'Natã Pereira'

