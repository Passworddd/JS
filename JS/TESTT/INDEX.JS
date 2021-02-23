// Poliformismo - SuperClasse

function Conta(agencia,conta,saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    Object.defineProperty(this,'saldo',{
        get: function(){
            return saldo;
        },
        set: function(valor){
            saldo = valor;
        }
    });
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo <= valor){
        console.log(`Saldo insuficiênte = ${this.saldo}`);
        return
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
  
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag.: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(1668,52963,34000000);

conta1.depositar(11);

conta1.sacar(40000);


function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log()
    }
}
