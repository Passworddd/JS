class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} está ligado`);
        }
        
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} está desligado`)
            return;
        }

        this.ligado = false;
    }
}

 class Smartphone extends DispositivoEletronico{
     constructor(nome,cor,modelo) {
         super(nome);


         this.cor = cor;
         this.modelo = modelo;
     }
 }

 class Tablet extends DispositivoEletronico {
     constructor(nome,wifi){
        super(nome);

        this.wifi = wifi;
    }
        
 }

 class Memoria extends Smartphone{}
 


 const s1 = new Smartphone('Samsung','Preto','Galaxy s1');
 const t1 = new Tablet('iPad', true)

 

 console.log(s1);
 console.log(t1);

 t1.ligar();
 t1.ligar();


//console.log(d1)