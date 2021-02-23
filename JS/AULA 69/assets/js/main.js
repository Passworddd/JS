function Gerador(cpf){

    Object.defineProperty(this,'limpaCPF',{
        get: function(){
            return cpf.replace(/\D+/g,'');
        },
        set: function(valor){
            limpaCPF = valor
        }
    });

} Gerador.prototype.validaCPF = function () {

    if (typeof (this.limpaCPF) == undefined) { return false };
    if (this.limpaCPF.length != 11) { return false };

    let valor = this.limpaCPF; valor = Array.from(valor); valor = valor.slice(0,9);
    let contador = valor.length + 1;
    let acumulador = 0;

   /**
    *  for (let index of valor) {
        if (contador <= 10 && contador >= 2) {
            acumulador += index * contador;
            contador--;
        } else { acumulador += index * 0 }
    }
    */

   const validador1 = valor.reduce(function(acumulador,numberCPF){
       acumulador += Number(numberCPF)*contador;
       contador--;
       return acumulador
   },0);

    const array = [];

    array.push((11 - (validador1 % 11)));

    console.log(array)

    contador = 11;
    acumulador = 0;


    for (let index of valor) {
        if (contador <= 11 && contador >= 2) {
            acumulador += index * contador;
            contador--;
        } else { acumulador += index * 0 }
    }

    acumulador = (11 - (acumulador % 11));

    array.splice(array.length, 1, acumulador);

    console.log(array)

    const vali = valor.slice(-2);
    const valiC = `${array[0]}` + `${array[1]}`

    if (vali != valiC) {
        return false;
    }
    return true;
};


const validador = new Gerador('111.742.354-97');

console.log(validador.validaCPF());