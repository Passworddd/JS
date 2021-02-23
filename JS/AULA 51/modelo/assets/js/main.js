function criarCalculadora (){

        this.display = document.querySelector('.display');// Display que so é acessável pela função criarCaculadora
        





        this.clickBotao = () => {
            document.addEventListener('click',e =>{
                const el = e.target;
                
                if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-num-clear')) this.clearDisplay();
                if(el.classList.contains('btn-dell')) this.dellElment();
                if(el.classList.contains('btn-resultado')) this.result();
            });
        };
        this.dellElment = () =>this.display.value = this.display.value.slice(0, -1);
        this.clearDisplay = () =>this.display.value = '';
        this.btnParaDisplay = (valor) =>this.display.value += valor;
        this.result = () => {
            conta = this.display.value; 
            try { 
                conta = eval(conta);
                if(!conta){
                 alert('Conta Invalida'); 
                 return;}
                this.display.value = conta;
            }catch(e){this.display.value = 'Calculo Invalido'
            setTimeout(() => {
               this.display.value = ''
            }, 1000); };}


        
        
        this.iniciar = () => { // Uma variável vai receber uma função anonima 
            this.clickBotao();
            this.precioneEnter();
        };
        this.precioneEnter = () => {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 3){
                    this.realizaConta();
                    this.display.focus();
                }
            });
        };
        
       
        
}

const calculadora = new criarCalculadora()

calculadora.iniciar();