class Validador{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            get: function(){return cpfEnviado.replace(/\D+/g,'')},
            writable: false,
            enumerable: false,
            configurable: false,
        });
    }
    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf(numDigito){
        return this.cpfLimpo().slice(0,- numDigito);
    }
    validar(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo != 'string') return false;
        if(this.cpfLimpo.length != 11) return false;
        if(this.eSequencia()) return false;

        console.log(this.geraNovoCpf(9));


        

    return true;        
    }
}

const validar = new Validador('111.742.354-97');

console.log(validar.validar());